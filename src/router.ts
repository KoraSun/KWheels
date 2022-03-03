import {createWebHashHistory,createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import {h} from 'vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import DocDemo from './Components/DocDemo.vue'
import MarkDown from './components/MarkDown.vue'

const history = createWebHashHistory()
const md = path=>h(MarkDown,{path,key:path})

export const router =createRouter({
    history:history,
    routes:[
        {path:'/',component:Home},
        {path:'/doc',component:Doc,
        children:[
            {path:'',component:DocDemo},
            {path:'intro',component:md('../markdown/intro.md')},
            {path:'get-started',component:md('../markdown/get-started.md')},
            {path:'install',component:md('../markdown/install.md')},
            {path:'switch',component:SwitchDemo},
            {path:'button',component:ButtonDemo},
            {path:'dialog',component:DialogDemo},
            {path:'tabs',component:TabsDemo},
        ]},
    ]
})
router.afterEach(()=>{
})