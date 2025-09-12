import { createRouter , createWebHistory  } from "vue-router";
import Main from "../components/Main.vue";
import Todo from "../components/Todo.vue";
import About from "../components/About.vue";


const routes = [
    {path : '/' , component : Main},
    {path : '/Todo' , name:"Todo", component : Todo},
    {path : '/about' , component : About},

]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router