<template>
    <h1>Tabs 示例</h1>
    <section class="second-title">
        <h2>基础用法</h2>
        <p>
        使用<span>v-model</span>绑定一个<span>Boolean</span>类型的变量到<span>Tabs</span>组件,指定默认<span
        >Tab</span
        >
        </p>
    </section>
    <Demo :component="TabsNormal"/>
    <Demo :component="TabsNormal2"/>
     <Attr :columns="columns" :data="data"/>  
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
import Demo from './Demo.vue'
import TabsNormal from '../components/Tabs/TabsNormal.vue'
import TabsNormal2 from '../components/Tabs/TabsNormal2.vue'
import Attr from './Attr.vue'
import {columns} from '../lib/data'
import {ref} from 'vue'
    export default {
        components:{Tabs,Tab,Demo,Attr},
        setup(){
            const data = ref([
            {
                params: 'tab-item',
                desc: 'tab页签',
                type: 'component',
                select: 'tab-item',
                default: '/',
            },
            ]);
           return {TabsNormal,TabsNormal2,columns,data}
        }     
    }
</script>

<style lang="scss" scoped>

</style>