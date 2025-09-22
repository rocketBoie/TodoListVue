<script setup>
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify'
import { Form, Field, useForm, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import NavBar from './NavBar.vue'
import { GoogleLogin } from 'vue3-google-login'

const router = useRouter()

const schema = yup.object({
    email: yup.string().required('Email is required').email('Email must be a valid email'),
    password: yup.string().required('Password is required'),
})

const { resetForm } = useForm()

const onSubmit = (values) => {
    router.push({ name: 'home' }).then(() => {
        toast.success('Logged in successfully!')
        console.log('Form login:', values)
    })
    resetForm()
}

const googleCallback = (response) => {
    router.push({ name: 'home' }).then(()=>{
        toast.success("Google Login Successfull")
        console.log('Google login response:', response)
    })
}
</script>

<template>
    <div class="bg-cover bg-center h-screen fixed inset-0 flex justify-center items-center"
        style="background-image: url('https://images.pexels.com/photos/4068318/pexels-photo-4068318.jpeg')">
        <NavBar :islogin="isLogin" />

        <div class="text-white p-6 rounded-lg shadow-lg w-96 bg-black-90/50 space-y-4">
            <Form @submit="onSubmit" :validation-schema="schema">
                <h2 class="text-2xl mb-4">Login</h2>

                <label for="email" class="block text-sm font-medium text-white">Email</label>
                <Field name="email" as="input" type="email" id="email" placeholder="Enter Your Email"
                    class="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                <ErrorMessage name="email" class="text-red-500 text-xs" />

                <label for="password" class="block text-sm font-medium text-white mt-4">Password</label>
                <Field name="password" as="input" type="password" id="password" placeholder="Enter Your Password"
                    class="mt-1 p-2 border border-gray-300 rounded-md w-full" autocomplete="current-password" />
                <ErrorMessage name="password" class="text-red-500 text-xs" />

                <button type="submit" class="mt-4 bg-blue-500 text-white p-2 rounded-lg w-full cursor-pointer">
                    Login
                </button>
            </Form>

            <div class="text-center text-white">or</div>
            <div class="w-[20vw] max-w-md mx-auto flex items-center justify-center">
                <GoogleLogin  :callback="googleCallback" />
            </div>

            <p class="mt-4 text-sm text-white">
                Don't have an account?
                <br />
                <router-link to="/register" class="text-blue-200 underline">Register here</router-link>
            </p>
        </div>
    </div>
</template>
