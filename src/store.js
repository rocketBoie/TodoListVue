
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTodoStore = defineStore('todo', () => {
  const msg = ref("Welcome To TodoList")
  const inputText = ref('')
  const pendingTasks = ref([])
  const completedTasks = ref([])
  const waitingTasks = ref([])
  const isEditing = ref(false)
  const isEditingIndex = ref(-1)
  const nextId = ref(1)

  function addList() {
    if (inputText.value.trim().length > 0) {
      if (isEditing.value) {
        pendingTasks.value[isEditingIndex.value].text = inputText.value.trim()
        isEditing.value = false
        isEditingIndex.value = -1
      } else {
        pendingTasks.value.push({
          id: nextId.value++,
          text: inputText.value.trim(),
          checked: false
        })
      }
      inputText.value = ''
    } else {
      alert("Add items 😒")
    }
  }

  function editList(index) {
    if (pendingTasks.value.length === 0) {
      inputText.value = ''
    }

    inputText.value = pendingTasks.value[index].text
    isEditing.value = true
    isEditingIndex.value = index
  }

  function deleteTask(index) {
    pendingTasks.value.splice(index, 1)
    inputText.value = ''
  }

  function deleteTaskWating(index) {
    waitingTasks.value.splice(index, 1)
  }

  function deleteTaskCompleted(index) {
    completedTasks.value.splice(index, 1)
  }

  function deleteTaskAll() {
    completedTasks.value.length = 0
  }

  function onDragChange() {
    inputText.value = ''
  }

  return {
    msg,
    inputText,
    pendingTasks,
    completedTasks,
    waitingTasks,
    isEditing,
    isEditingIndex,
    nextId,
    addList,
    editList,
    deleteTask,
    deleteTaskWating,
    deleteTaskCompleted,
    deleteTaskAll,
    onDragChange,
  }
})
