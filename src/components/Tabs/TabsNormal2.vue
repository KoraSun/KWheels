<demo>
其他场景tabs
</demo>

<template>
    <div>
        <Tabs v-model:selected="selected">
        <Tab title="日总结">今日toDoList</Tab>
        <Tab title="周总结" >本周toDoList</Tab>
        <Tab title="月总结" >本月总结</Tab>
        </Tabs>
    </div>
</template>
<script lang="ts">
import Tabs from '../../lib/Tabs.vue'
import Tab from '../../lib/Tab.vue'
import { ref } from 'vue'
    export default {
        components:{Tabs,Tab},
        setup(){
           const selected=ref('周总结')
           return {selected}
        }
    }
</script>
