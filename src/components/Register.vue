<script setup>
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify'
import { Form, Field, useForm, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import NavBar from './NavBar.vue'
const route = useRouter()

const schema = yup.object({
  name: yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
  email: yup.string()
    .required('Email is required')
    .email('Email must be a valid email'),
  password: yup.string()
    .required('Password is required')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[^a-zA-Z0-9]/, 'Password must contain at least one special character')
    .min(3, 'Password must be at least 6 characters'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
})

const { resetForm } = useForm({
  validationSchema: schema,
})  

const onSubmit = (values) => {
  route.push({ name: "Login" }).then(() => {
    toast.success('User Created!')
    console.log(values)
  })

}
</script>

<template>
  <div class="bg-cover bg-center h-screen fixed inset-0 flex justify-center items-center"
    style="background-image: url('https://images.pexels.com/photos/4068318/pexels-photo-4068318.jpeg')">
    <NavBar/>
    <div class="text-white p-6 rounded-lg shadow-lg w-96 bg-black-90/50">
      <Form @submit="onSubmit" :validation-schema="schema">
        <h2 class="text-2xl mb-4">Register</h2>

        <label for="name" class="block text-sm font-medium text-white">Name</label>
        <Field name="name" as="input" type="text" id="name" placeholder="Enter Your Name"
          class="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        <ErrorMessage name="name" class="text-red-500 text-xs" />

        <label for="email" class="block text-sm font-medium text-white mt-4">Email</label>
        <Field name="email" as="input" type="email" id="email" placeholder="Enter Your Email"
          class="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        <ErrorMessage name="email" class="text-red-500 text-xs" />

        <label for="password" class="block text-sm font-medium text-white mt-4">Password</label>
        <Field name="password" as="input" type="password" id="password" placeholder="Enter Your Password"
          class="mt-1 p-2 border border-gray-300 rounded-md w-full" autocomplete="new-password" />
        <ErrorMessage name="password" class="text-red-500 text-xs" />

        <label for="confirmPassword" class="block text-sm font-medium text-white mt-4">Confirm Password</label>
        <Field name="confirmPassword" as="input" type="password" id="confirmPassword"
          placeholder="Confirm Your Password" class="mt-1 p-2 border border-gray-300 rounded-md w-full"
          autocomplete="new-password" />
        <ErrorMessage name="confirmPassword" class="text-red-500 text-xs" />

        <div class="mt-4">
          <Field name="termsAccepted" as="input" type="checkbox" id="terms" class="mr-2" />
          <label for="terms" class="text-sm text-white">I accept the <router-link to="/about" class="text-blue-400">terms and
              conditions</router-link></label>
          <ErrorMessage name="termsAccepted" class="text-red-500 text-xs" />
        </div>

        <button type="submit" class="mt-4 bg-blue-500 text-white p-2 rounded-lg w-full cursor-pointer">Submit</button>
      </Form>
    </div>
  </div>
</template>
