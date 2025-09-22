import { defineStore } from "pinia";

export const todoStore = defineStore("todo", {
  state: () => ({
    msg: "Welcome To TodoList",
    inputText: "",
    pendingTasks: [],                                                                                                                                                          
    completedTasks: [],
    waitingTasks: [],
    isEditing: false,
    isEditingIndex: -1,
    nextId: 1,
  }),
  persist: true,
  actions: {
    addList() {
      if (this.inputText.trim().length > 0) {
        if (this.isEditing && this.isEditingIndex !== -1 &&this.pendingTasks[this.isEditingIndex]) {
          this.pendingTasks[this.isEditingIndex].text = this.inputText.trim();
          this.isEditing = false;
          this.isEditingIndex = -1;
        } else {
            this.pendingTasks.push({
            id: this.nextId++,
            text: this.inputText.trim(),
          });
        }
        this.inputText = "";
      } else {
        alert("Add items 😒");
      }
    },
    editList(index) {
      this.inputText = this.pendingTasks[index].text;
      this.isEditing = true;
      this.isEditingIndex = index;
    },
    deleteTask(index) {
      this.pendingTasks.splice(index, 1);
      this.inputText = "";
    },
    deleteTaskWating(index) {
      this.waitingTasks.splice(index, 1);
    },
    deleteTaskCompleted(index) {
      this.completedTasks.splice(index, 1);
    },
    deleteTaskAll() {
      this.completedTasks.length = 0;
    },
  },
});
