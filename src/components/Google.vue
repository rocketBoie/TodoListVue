<script setup lang="ts">
import { GoogleLogin } from 'vue3-google-login';

const callback = (res) =>{
    console.log(res)
}

</script>

<template>
    <div>
        <GoogleLogin :callback="callback"/>
    </div>
</template>