import Login from "../pages/LoginPage.vue";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainHome.vue"),
    children: [{ path: "", component: () => import("pages/LoginPage.vue") }],
  },
  {
    path: "/checkout",
    component: () => import("layouts/MainHome.vue"),
    children: [{ path: "", component: () => import("pages/CheckOutPage.vue") }],
  },
  {
    path: "/Catalogo",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/cadastroCliente",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/CadastroClientePage.vue") },
    ],
  },
  {
    path: "/TermosCondicoes",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/LgpdPage.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("pages/LoginPage.vue"),
  },
];

export default routes;
