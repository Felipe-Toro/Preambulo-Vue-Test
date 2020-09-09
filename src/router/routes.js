const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Home.vue"), name: "home" }
    ]
  },
  {
    path: "/product",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/product",
        component: () => import("pages/Product.vue"),
        name: "product"
      }
    ]
  },
  {
    path: "/Finish",
    component: () => import("pages/Finish.vue")
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
