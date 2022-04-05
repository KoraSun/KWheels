<template>
    <button 
       class="k-switch"
       @click="toggle"
       :class="{'k-checked':value}"
       :disabled="disabled"
    >
    <span>   
    </span>
    </button>
</template>

<script lang="ts">
    export default {
        props:{
            value:Boolean,
            disabled:{
                type:Boolean,
                default:false
            },
        },
        setup(props,context){
           const toggle=()=>{
               context.emit('update:value',!props.value)
            }
            return {toggle}
        }
        
    }
</script>

<style lang="scss" >
$h:22px;
$h2:18px;
.k-switch{
    height:22px;
    width: 44px;
    border:none;
    background: grey;
    border-radius: 11px;
    position: relative;
    cursor: pointer;
    &[disabled]{
            cursor: not-allowed;
            pointer-events: not-allowed;
        }
    > span{
        position: absolute;
        top: 2px;
        left:2px;
        height: $h2;
        width: $h2;
        background: white;
        border-radius: 11px;
        transition: left 250ms;
    }
    &.k-checked{
        background:rgba(119, 183, 243);
        > span{
            left:calc(100% - #{$h2} - 2px);
        }
      }
}


    





</style>