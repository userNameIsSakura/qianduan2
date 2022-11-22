const routes = [
    {
        path: '',
        redirect: '/index'
    },
    {
        path: '/box',
        component: import('@/components/Layout'),
        children: [
            {
                path: '/index',
                component: () => import('@/components/Index')
            },
            {
                path: '/login',
                component: () => import('@/components/service/Login')
            },
            {
              path: '/register',
              component: () => import('@/components/service/Register')
            },
            {
                path: '/aside',
                component: () => import('@/components/Aside'),
                children: [
                    {
                        path: '/rentalService',
                        component: () => import('@/components/service/RentalService')
                    },
                    {
                        path: '/historyOrders',
                        component: () => import('@/components/service/HistoryOrders')
                    }
                ]
            },
        ]
    },
    {
        path: "/transit",
        component: () => import("@/components/Transit")
    },
    {
        path: "/test2",
        component: () => import("@/components/tool/Message")
    },    {
        path: "/test",
        component: () => import("@/components/tool/Test")
    },
]

export default routes
