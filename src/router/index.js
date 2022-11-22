import { createRouter, createWebHashHistory } from 'vue-router'
import routes from "@/router/router";


// 创建路由对象
const router = createRouter({
    mode: 'history',
    // 指定路由的工作模式
    history: createWebHashHistory(),
    // 自定义路由高亮的 class 类
    // 声明路由的匹配规则
    routes,
})




// 导出路由对象
export default router
