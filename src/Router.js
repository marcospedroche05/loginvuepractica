import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import LoginComponent from "./components/LoginComponent.vue";
import PerfilComponent from "./components/PerfilComponent.vue";

const myRoutes = [
    {path: "/", component: HomeComponent},
    {path: "/login", component: LoginComponent},
    {path: "/perfil", component: PerfilComponent}
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;