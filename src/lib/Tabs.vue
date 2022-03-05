<template>
    <div class="k-tabs">
        <div class="k-tabs-nav" ref="container">
            <div class="k-tabs-nav-item" 
                 @click="select(t)"
                 :class="[t===selected?'selected':'']+[disabled===''?'disabled':'']"
                 v-for="(t,index) in titles" 
                 :ref="el=>{if(t===selected) selectedItem=el }"
                 :key="index"
                 >{{t}}
            </div>
            <div class="k-tabs-nav-indicator" ref="indicator"></div>
        </div>
        <div class="k-tabs-content">
            <component :is="current" :key="current.props.title"/>  
        </div>
    </div>
</template>
 
<script lang="ts">
import { onMounted,  ref, watchEffect ,computed} from 'vue'
import Tab from './Tab.vue'
    export default {
        props:{
            selected:{
                type:String
            },
            disabled:{
                type:String,
                default:''
            }  
        },
        setup(props,context){
           const selectedItem =ref<HTMLDivElement>(null)
           const indicator = ref<HTMLDivElement>(null)
           const container =ref<HTMLDivElement>(null)
           onMounted(()=>{
            watchEffect(()=>{
               const {width}=selectedItem.value.getBoundingClientRect()
               indicator.value.style.width=width+'px'

               const {left:NavLeft} =container.value.getBoundingClientRect()
               const {left:SelectedLeft} =selectedItem.value.getBoundingClientRect()
               const left =SelectedLeft-NavLeft
               indicator.value.style.left=left+'px'

            })
           })
          
           const defaults=context.slots.default()
           defaults.forEach((tag)=>{
               if(tag.type!==Tab){
                   throw new Error('Tabs子标签必须是Tab')
               }
           })
           
           
           const titles =defaults.map((tag)=>{
               return tag.props.title
           })
           
           const select=(title:string)=>{
               context.emit('update:selected',title)
           }
           const current=computed(()=>{
               return defaults.find((tag)=>tag.props.title===props.selected)

           })
           return {
               defaults,
               titles,
               select,
               current,
               selectedItem,
               indicator,
               container}
        }
        
    }
</script>

<style lang="scss">
$blue:#40a9ff;
$color:#333;
$border-color:#d9d9d9;

.k-tabs{
    &-nav{
        display: flex;
        color: $color;
        border-bottom: 1px solid $border-color;
        position: relative;
        &-item{
            padding: 8px 0;
            margin: 0 16px;
            cursor: pointer;

            &:first-child{
                margin-left: 0;

            }
            &.selected{
                color: $blue;

            }
        }

        &-indicator{
            position: absolute;
            height: 3px;
            background: $blue;
            left: 0;
            bottom: -1px;
            width: 65px;
            transition: all 250ms;
        }
    }

    &-content{
        padding: 8px 0;
    }
}

</style>