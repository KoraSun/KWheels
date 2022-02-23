import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import {createWebHashHistory,createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'

const history = createWebHashHistory()

const router =createRouter({
    history:history,
    routes:[
        {path:'/',component:Home},
        {path:'/doc',component:Doc},
        {path:'/doc/switch',component:Doc},
        {path:'/doc/button',component:Doc},
        {path:'/doc/dialog',component:Doc},
        {path:'/doc/tabs',component:Doc},


    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
