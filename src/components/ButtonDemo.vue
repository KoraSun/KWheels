<template>
    <div>
    <h1 class="first-title">Button 示例</h1>
    <section class="second-title">
      <h2>基础用法</h2>
      <p>
        使用<span>theme</span>属性改变<span>Button</span>组件的基础样式，以此适应<span>Button</span>组件的在不同情景下的使用
      </p>
    </section>
      <Demo :component="ButtonTheme" />

    <section class="second-title">
      <h2>支持Size</h2>
      <p>
        使用<span>Size</span>属性改变<span>Button</span>组件的大小，以此满足<span>Button</span>组件的在不同页面下的使用
      </p>
    </section>
      <Demo :component="ButtonSize" />

    <section class="second-title">
      <h2>支持Level</h2>
      <p>
        使用<span>Level</span>属性改变<span>Button</span>组件的颜色，以此凸显<span>Button</span>组件的不同优先级
      </p>
    </section>
      <Demo :component="ButtonLevel"/>

     <section class="second-title">
      <h2>支持Disabled</h2>
      <p>
        使用<span>disabled</span>属性<span>禁用Button</span>组件的点击事件，适用于<span>Button</span>组件的不被允许点击的情景
      </p>
    </section>
      <Demo :component="ButtonDisabled"/>

    <section class="second-title">
      <h2>支持Loading</h2>
      <p>
        使用<span>loading</span>属性显示<span>Button</span>组件正在<span>加载中</span>
      </p>
    </section>
      <Demo :component="ButtonLoading"/>
    </div>
       <Attr :columns="columns" :data="data"/>  
</template>

<script lang ="ts">
import Button from '../lib/Button.vue'
import Demo from './Demo.vue'
import ButtonTheme from './Buttons/ButtonTheme.vue'
import ButtonSize from './Buttons/ButtonSize.vue'
import ButtonLevel from './Buttons/ButtonLevel.vue'
import ButtonDisabled from './Buttons/ButtonDisabled.vue'
import ButtonLoading from './Buttons/ButtonLoading.vue'
import Attr from './Attr.vue'
import {columns} from '../lib/data'
import {ref} from 'vue'

    export default {
        components:{Demo,Button,Attr},
        setup(){
             const data = ref([
                {
                    params: 'theme',
                    desc: '按钮颜色',
                    type: 'string',
                    select: 'primary / info / link',
                    default: 'default',
                },
                {
                    params: 'size',
                    desc: '尺寸大小',
                    type: 'string',
                    select: 'small / normal / large',
                    default: 'normal',
                },
                 {
                    params: 'level',
                    desc: '优先级',
                    type: 'string',
                    select: 'warning/primary/danger',
                    default: 'primary',
                },
                 {
                    params: 'disabled',
                    desc: '是否禁止点击',
                    type: 'boolean',
                    select: 'false / true',
                    default: 'false',
                },
                {
                    params: 'loading',
                    desc: '是否加载',
                    type: 'boolean',
                    select: 'false / true',
                    default: 'false',
                }
                ]);
            return{
                ButtonTheme,
                ButtonSize,
                ButtonLevel,
                ButtonDisabled,
                ButtonLoading,
                columns,
                data
            }

        },
    }  
</script>

<style lang="scss" scoped>
$border-color:#d9d9d9;
.demo{
    border:1px solid $border-color;
    margin: 16px 0 32px;
    >h2{
        font-size: 20px;
        padding: 8px 16px;
        border-bottom: 1px solid $border-color;

    }
    &-component{
        padding: 16px;

    }
    &-actions{
        padding: 8px 16px;
        border-top: 1px dashed $border-color;

    }
    &-code{
        padding: 8px 16px;
        border-top: 1px dashed $border-color;

        >pre{
            line-height: 1.1;
            font-family: Consolas,'Courier New', Courier, monospace;
            margin:0;
        }
    }
}


</style>