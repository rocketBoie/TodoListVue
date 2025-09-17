<template>
  <nav class="fixed top-0 left-0 w-full bg-transparent text-white p-6 z-20">
    <div class="flex justify-around items-center">
      <div class="text-3xl font-bold">
        <router-link to="/" class="hover:text-white-400">t✔Do</router-link>
      </div>
      <ul class="flex space-x-6 text-lg">
        <li><router-link to="/" class="hover:text-blue-400">Home</router-link></li>
        <li><router-link to="/todo" class="hover:text-blue-400">Services</router-link></li>
        <li><router-link to="/about" class="hover:text-blue-400">About</router-link></li>
        <li><router-link to="/login" class="hover:text-blue-400">Login</router-link></li>
      </ul>
    </div>
  </nav>
</template>
