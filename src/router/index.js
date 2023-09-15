import { createRouter,  createWebHistory, } from "vue-router";
import Style from "@/views/admin/StyleView.vue";
import HomePageLayout from '@/layouts/HomePageLayout.vue';
import AdminHome from "@/views/admin/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "homepage",
    component: HomePageLayout,
    children: [
      {
        path: '/',
        name: 'home-page',
        component: () => import('@/views/user/HomePage.vue')
      }
    ]
  },
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: "Dashboard",
    },
    path: "/admin",
    name: "dashboard",
    component: AdminHome,
  },
  {
    meta: {
      title: "Tables",
    },
    path: "/tables",
    name: "tables",
    component: () => import("@/views/admin/TablesView.vue"),
  },
  {
    meta: {
      title: "Forms",
    },
    path: "/forms",
    name: "forms",
    component: () => import("@/views/admin/FormsView.vue"),
  },
  {
    meta: {
      title: "Profile",
    },
    path: "/profile",
    name: "profile",
    component: () => import("@/views/admin/ProfileView.vue"),
  },
  {
    meta: {
      title: "Ui",
    },
    path: "/ui",
    name: "ui",
    component: () => import("@/views/admin/UiView.vue"),
  },
  {
    meta: {
      title: "Responsive layout",
    },
    path: "/responsive",
    name: "responsive",
    component: () => import("@/views/admin/ResponsiveView.vue"),
  },
  {
    meta: {
      title: "Login",
    },
    path: "/login",
    name: "login",
    component: () => import("@/views/auth/LoginPage.vue"),
  },
  {
    meta: {
      title: "Register",
    },
    path: "/register",
    name: "register",
    component: () => import("@/views/auth/RegisterPage.vue"),
  },
  {
    meta: {
      title: "Forgot Password",
    },
    path: "/fogot-password",
    name: "fogot-password",
    component: () => import("@/views/auth/ForgotPassword.vue"),
  },
  {
    meta: {
      title: "Forgot Password",
    },
    path: "/check-email",
    name: "check-email",
    component: () => import("@/views/auth/CheckEmail.vue"),
  },
  {
    meta: {
      title: "Forgot Password",
    },
    path: "/set-new-password",
    name: "set-new-password",
    component: () => import("@/views/auth/SetNewPassword.vue"),
  },
  {
    meta: {
      title: "PasswordReset",
    },
    path: "/reset-password",
    name: "reset-password",
    component: () => import("@/views/auth/PasswordReset.vue"),
  },
  {
    meta: {
      title: "Error",
    },
    path: "/error",
    name: "error",
    component: () => import("@/views/admin/ErrorView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});

export default router;
