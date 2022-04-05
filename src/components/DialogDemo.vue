<template> 
        <h1 class="first-title">Dialog 示例</h1>

        <section class="second-title">
        <h2>基础用法</h2>
        <p>
        使用<span>v-model</span>绑定一个<span>Boolean</span>类型的变量到<span>Dialog</span>组件，确定和取消按钮都支持<span>事件传递</span>，标题和内容支持父组件<span>自定义</span>
        </p>
        </section>  
        <Demo :component="DialogNormal"/>

        <section class="second-title">
        <h2>支持 closeOnClickOverlay</h2>
        <p>
        在<span>Dialog</span>组件中添加<span>closeOnClickOverlay</span>属性，以此来决定是否通过<span>点击遮罩层</span>关闭<span>Dialog</span>组件
        </p>
        </section>
        <Demo :component="DialogOverlay" />

        <section class="second-title">
        <h2>信息确认类型</h2>
        <p>
         只保留<span>Dialog</span>组件的确认按钮，支持<span>传递事件</span>，适用于需要确认某些用户数据的场景
 
        </p>
        </section>
        <Demo :component="DialogInfo"/>

        <section class="second-title">
        <h2>利用TS打开 Dialog</h2>
        <p>引入<span>openDialog</span>模块创建一个<span>Dialog</span>组件</p>
        </section>
        <Demo :component="DialogOneStep" />

        <Attr :columns="columns" :data="data"/>  
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import Demo from './Demo.vue'
import DialogInfo from './Dialogs/DialogInfo.vue'
import DialogNormal from './Dialogs/DialogNormal.vue'
import DialogOverlay from './Dialogs/DialogOverlay.vue'
import DialogOneStep from './Dialogs/DialogOneStep.vue'
import Attr from './Attr.vue'
import {columns} from '../lib/data'
import {ref} from 'vue'
export default {
        components:{Dialog,Button,Demo,Attr},
        setup(){
          const data= ref([
                {
                  params:'visible',
                  desc:'是否展示',
                  type:'boolean',
                  select:'true/false',
                  default:'false'
                },
                {
                   params: 'closeOnClickOverlay',
                   desc: '是否允许点击遮罩层关闭',
                   type: 'boolean',
                   select: 'true / false',
                   default: 'true',
                },
                {
                   params: 'ok',
                   desc: '确认触发事件',
                   type: 'function',
                   select:'/',
                   default: '/',
                },
                {
                   params: 'cancel',
                   desc: '取消触发事件',
                   type: 'function',
                   select:'/',
                   default: '/',
                },

                ])
            return {
                DialogInfo,
                DialogNormal,
                DialogOverlay,
                DialogOneStep,
                columns,
                data}
        }        
}
</script>

<style lang="scss" scoped>

</style>