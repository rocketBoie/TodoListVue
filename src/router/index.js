import { createRouter , createWebHistory  } from "vue-router";
import Main from "../components/Main.vue";
import Todo from "../components/Todo.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import About from "../components/About.vue";


const routes = [
    {path : '/' ,name:"home", component : Main},
    {path : '/Todo' , name:"Todo", component : Todo},
    {path : '/login',  name : "Login", component : Login},
    {path : '/register' , name : "Register", component : Register},
    {path : '/about' , component : About}
]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router