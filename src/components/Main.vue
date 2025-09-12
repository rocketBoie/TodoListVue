<script setup>
import { ref } from 'vue'
const msg = ref("TODO List")
const wel = ref("Welcome to a New Beginning!")
const des = ref("Embrace the journey, challenge the limits, and let your dreams soar.")
import Button from './Button.vue';
import { useRouter } from 'vue-router';
import NavBar from './NavBar.vue';
const route = useRouter()
const handleRoute = ()=>{
    route.push({name: "Todo"})
}
</script>

<template>
    <NavBar/>
    <div class="bg-cover bg-center h-screen relative flex flex-col justify-center items-center px-6"
        style="background-image: url('https://images.pexels.com/photos/4068318/pexels-photo-4068318.jpeg?_gl=1*2qg1d5*_ga*MTgxMDI1MjQxMS4xNzU3NjU0OTg4*_ga_8JE65Q40S6*czE3NTc2NTQ5ODckbzEkZzEkdDE3NTc2NTU3OTQkajE0JGwwJGgw')">

        <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>

        <h1 class="text-white text-6xl sm:text-9xl font-extrabold  relative z-10 mb-9">
            {{ msg }}
        </h1>

        <div class="relative z-10 p-6 text-center">
            <h1 class="text-white text-4xl sm:text-5xl lg:text-6xl font-bold ">
                {{ wel }}
            </h1>

            <p class="text-white text-lg sm:text-xl lg:text-2xl mt-6 ">
                {{ des }}
            </p>

            <h1 class="text-white mt-9 text-3xl">Continue As Guest ⬇️</h1>
            <Button @click="handleRoute" :text="'Get Started Now'"
                class="mt-8 px-8 py-4 bg-blue-600 text-white text-lg sm:text-xl font-semibold rounded-lg shadow-xl " />
        </div>
    </div>
</template>
