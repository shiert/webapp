const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/pages/Home.vue"),
    meta: { title: "首页" }
  },
  {
    path: "/subsidy",
    name: "Subsidy",
    component: () => import("@/pages/subsidy/index.vue"),
    meta: { title: "申请补贴" }
  },
  {
    path: "/progress",
    name: "Progress",
    component: () => import("@/pages/progress/index.vue"),
    meta: { title: "申请进度查询" }
  },
  {
    path: "/guide",
    name: "Guide",
    component: () => import("@/pages/guide/index.vue"),
    meta: { title: "操作指南" }
  },
  {
    path: "/service",
    name: "Service",
    component: () => import("@/pages/service/index.vue"),
    meta: { title: "各地咨询服务热线" }
  },
  {
    path: "/recycle",
    name: "Recycle",
    component: () => import("@/pages/recycle/index.vue"),
    meta: { title: "报废回收网点查询" }
  }
];

export default routes;
