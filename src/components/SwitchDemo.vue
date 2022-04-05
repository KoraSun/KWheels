<template>
    <div>
        <h1 class="first-title">Switch组件示例</h1>
        <section class="second-title">
            <h2>基础用法</h2>
            <p>使用<span>v-model</span>绑定一个<span>Boolean</span>类型的变量到<span>Switch组件</span></p>
        </section>
        <Demo :component="SwitchNormal"/>
         <section class="second-title">
            <h2>支持disabled属性</h2>
            <p>在<span>Switch</span>组件添加一个<span>disabled</span>属性，以此来<span>禁用Switch组件</span></p>
        </section>
        <Demo :component="SwitchDisabled"/> 
        <Attr :columns="columns" :data="data"/>  
    </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import {ref} from 'vue'
import SwitchNormal from './Switches/SwitchNormal.vue'
import SwitchDisabled from './Switches/SwitchDisabled.vue'
import Attr from './Attr.vue'
import {columns} from '../lib/data'
import Demo from './Demo.vue'


    export default {
        components:{
            Button,Demo,Attr
        },
        setup(){
           const bool= ref(false)
           const data = ref(
            [{
                params: 'value',
                desc: '是否选中',
                type: 'boolean',
                select: 'false / true',
                default: 'false',
            },
            ]);
           return {bool,SwitchNormal,SwitchDisabled,columns,data}
        }
     
    }
</script>

<style lang="scss" scoped>



</style>