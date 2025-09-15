<script setup>
import { ref } from 'vue'
import NavBar from './NavBar.vue'

const msg = ref("About Us")
const wel = ref("Get to Know Us Better")
const des = ref("We're passionate about creating seamless and impactful experiences that help you thrive.")
</script>

<template>
  <NavBar />
  <div class="bg-cover bg-center h-screen relative flex flex-col justify-center items-center px-6"
    style="background-image: url('https://images.pexels.com/photos/4068318/pexels-photo-4068318.jpeg?_gl=1*2qg1d5*_ga*MTgxMDI1MjQxMS4xNzU3NjU0OTg4*_ga_8JE65Q40S6*czE3NTc2NTQ5ODckbzEkZzEkdDE3NTc2NTU3OTQkajE0JGwwJGgw')">
    <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>

    <h1 class="text-white text-4xl sm:text-6xl font-extrabold relative z-10 mb-6">
      {{ msg }}
    </h1>

    <div class="relative z-10 p-6 text-center">
      <h1 class="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
        {{ wel }}
      </h1>

      <p class="text-white text-base sm:text-lg lg:text-xl mt-4 max-w-2xl mx-auto">
        {{ des }}
      </p>

      <div class="mt-6">
        <p class="text-white text-base sm:text-lg lg:text-xl max-w-3xl mx-auto">
          We are a team of passionate individuals focused on creating innovative solutions. Whether it's developing digital products, web applications, or tackling complex problems, we are here to help you succeed in a rapidly changing world.
        </p>
        <p class="text-white text-base sm:text-lg lg:text-xl mt-6 max-w-3xl mx-auto">
          Our values are deeply rooted in integrity, collaboration, and excellence. We believe in building long-term relationships with our clients and working closely with them to achieve their goals.
        </p>
      </div>
    </div>
  </div>
</template>
