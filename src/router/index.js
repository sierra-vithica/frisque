import { createRouter, createWebHistory } from "vue-router";
import supabase from "../supabase";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: () => import("../views/Accounts/DashboardView.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/Accounts/LoginView.vue"),
    },
    {
      path: "/users",
      name: "Users",
      component: () => import("../views/Users/UserListView.vue"),
    },
    {
      path: "/companies",
      name: "Companies",
      component: () => import("../views/Companies/CompanyListView.vue"),
    },
    {
      path: "/contacts",
      name: "Contacts",
      component: () => import("../views/Contacts/ContactListView.vue"),
    },
  ],
});

// Guard against non-authenticated users
router.beforeEach(async (to) => {
  if (supabase.auth.user() && to.name !== "Login") {
    return { name: "Login" };
  }
});

export default router;
