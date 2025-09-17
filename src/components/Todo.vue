<script setup>
import { ref } from 'vue'
import draggable from 'vuedraggable'
import Button from './Button.vue'
import NavBar from './NavBar.vue'
import { todoStore } from '../stores/store'

const todo = todoStore()

function onDragChange() {
  todo.inputText = ''
}
</script>

<template>
    <div class="bg-cover bg-center h-screen relative flex flex-col justify-center items-center px-6 text-white"      
        style="background-image: url('https://images.pexels.com/photos/4068318/pexels-photo-4068318.jpeg?_gl=1*2qg1d5*_ga*MTgxMDI1MjQxMS4xNzU3NjU0OTg4*_ga_8JE65Q40S6*czE3NTc2NTQ5ODckbzEkZzEkdDE3NTc2NTU3OTQkajE0JGwwJGgw')">
       <NavBar/>
        <div class="max-w-7xl mx-auto px-6 py-10 ">
            <h1 class="text-4xl font-extrabold text-center text-white mb-12 tracking-wide">
                {{ todo.msg }}
            </h1>

            <div class="flex flex-col sm:flex-row gap-4 mb-12 max-w-xl mx-auto">
                <input v-model="todo.inputText" type="text" placeholder="Add a new task..."
                    class="flex-grow border text-white border-gray-300 rounded-lg px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" />
                <Button @click="todo.addList" :text="todo.isEditing && todo.inputText.trim() !== '' ? 'Update' : 'Add'"
                    class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-shadow shadow-md curpo" />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                <section class="mt-3 ">
                    <h2 class="text-2xl font-semibold text-white mb-4 border-b border-blue-300 pb-2">
                        Pending ⏳
                    </h2>
                    <draggable v-model="todo.pendingTasks" item-key="id" :group="{ name: 'tasks' }" @change="onDragChange " 
                        class="bg-transparent p-6 rounded-xl shadow-md min-h-[150px] w-[20vw] border border-white/20  ">
                        <template #item="{ element, index }">
                            <div
                                class="flex justify-between items-center bg-white/20 rounded-md shadow-sm p-4 mb-4 hover:shadow-lg transition-shadow">
                                <p class="text-white break-words flex-grow select-none">
                                    {{ element.text }}
                                </p>
                                <div class="flex gap-3 ml-6">
                                    <Button @click="todo.editList(index)" :text="'Edit'"
                                        class="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-1 rounded-md text-sm font-medium shadow-sm" />
                                    <Button @click="todo.deleteTask(index)" :text="'Delete'"
                                        class="bg-red-800 hover:bg-red-600 text-white px-4 py-1 rounded-md text-sm font-medium shadow-sm" />
                                </div>
                            </div>
                        </template>
                    </draggable>
                </section>

                <section class="mt-3">
                    <h2 class="text-2xl font-semibold text-white mb-4 border-b border-yellow-300 pb-2">
                        Waiting ⏱️
                    </h2>
                    <draggable v-model="todo.waitingTasks" item-key="id" :group="{ name: 'tasks' }"
                        class="bg-transparent p-6 rounded-xl shadow-md min-h-[150px] border border-white/20  w-[20vw]">
                        <template #item="{ element, index }">
                            <div
                                class="flex justify-between items-center bg-white/30 rounded-md shadow-sm p-4 mb-4 hover:shadow-lg transition-shadow">
                                <p class=" text-white break-words flex-grow select-none">
                                    {{ element.text }}
                                </p>
                                <Button @click="todo.deleteTaskWating(index)" :text="'Delete'"
                                    class="bg-red-800 hover:bg-red-600 text-white px-4 py-1 rounded-md text-sm font-medium shadow-sm" />
                            </div>
                        </template>
                    </draggable>
                </section>

                <section>
                    <div class="flex items-center justify-between mb-4 border-b border-green-300 pb-2">
                        <h2 class="text-2xl font-semibold text-white">Completed ✅</h2>
                        <Button @click="todo.deleteTaskAll()" :text="'Delete All'"
                            class="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md text-sm font-semibold shadow-sm" />
                    </div>
                    <draggable v-model="todo.completedTasks" item-key="id" :group="{ name: 'tasks' }"
                        class="bg-transparent p-6 rounded-xl shadow-md min-h-[150px] border border-white/20  w-[20vw]">
                        <template #item="{ element, index }">
                            <div
                                class="flex justify-between items-center bg-white/30 rounded-md shadow-sm p-4 mb-4 hover:shadow-lg transition-shadow">
                                <p class=" text-white  break-words flex-grow line-through select-none tracking-wide">
                                    {{ element.text }}
                                </p>
                                <Button @click="todo.deleteTaskCompleted(index)" :text="'Delete'"
                                    class="bg-red-800 hover:bg-red-600 text-white px-4 py-1 rounded-md text-sm font-medium shadow-sm" />
                            </div>
                        </template>
                    </draggable>
                </section>
            </div>
        </div>
    </div>
</template>
