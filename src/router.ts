import {createWebHashHistory,createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import switchdemo from './components/SwitchDemo.vue'

const history = createWebHashHistory()

export const router =createRouter({
    history:history,
    routes:[
        {path:'/',component:Home},
        {path:'/doc',component:Doc,children:[
            {path:'switch',component:switchdemo},
            {path:'button',component:Doc},
            {path:'dialog',component:Doc},
            {path:'tabs',component:Doc},
        ]},
    ]
})
router.afterEach(()=>{
    console.log('切换了')
})