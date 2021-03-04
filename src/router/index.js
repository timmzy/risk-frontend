import {createWebHistory, createRouter} from "vue-router";
import Home from "../views/Risks.vue";
import PageNotFound from "../components/PageNotFound";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/:pathMatch(.*)*",
        component: PageNotFound,
        name: "404"
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
