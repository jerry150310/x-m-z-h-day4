import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Error from "@/components/Error";

import Main from "@/pages/Main";
import Haoyou from "@/pages/Haoyou";
import Dongtai from "@/pages/Dongtai";

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: "/home/main"
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
            children: [{
                    path: "/home/main",
                    component: Main
                },
                {
                    path: "/home/haoyou",
                    component: Haoyou
                },
                {
                    path: "/home/dongtai",
                    component: Dongtai
                }
            ]
        },
        {
            path: "*",
            component: Error
        }
    ]
})