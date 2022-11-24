const routes = [
    {
        path: '',
        redirect: '/index'
    },
    {
        path: '/mobile',
        redirect: '/mobile/index'
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
      path: '/mobile/register',
      component: import('@/components/mobile/MobileRegister')
    },
    {
        path: '/mobile',
        redirect: '/mobile/index'
    },
    {
        path: '/mobileLayout',
        component: import('@/components/mobile/MobileLayout'),
        children: [
            {
                path: '/mobile/login',
                component: () => import('@/components/mobile/MobileLogin'),
            },
            {
                path: '/mobile/index',
                component: () => import('@/components/mobile/MobileIndex'),
            },
            {
                path: '/mobile/rentalService',
                component: () =>  import('@/components/mobile/MobileRental'),
            },
        ]

    },

]

export default routes
