import { createWebHistory, createRouter } from 'vue-router'
import routes from "./routes";
const webappName = "系统名称";
function setPageTitle(pageTitle) {
    // 设置页面 title
    window.document.title = pageTitle ? `${pageTitle}-${webappName}` : `${webappName}`;
}

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// 全局前置守卫
router.beforeEach((to, from, next) => {
    const { title } = to.meta;
    setPageTitle(title);
    next();
});
export default router;
