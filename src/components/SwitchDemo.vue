<template>
    <div>
        <h2>Switch组件示例</h2>

        <Demo :component="SwitchNormal"/>
        <Demo :component="SwitchDisabled"/>   
    </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import {ref} from 'vue'
import SwitchNormal from './Switches/SwitchNormal.vue'
import SwitchDisabled from './Switches/SwitchDisabled.vue'
import 'prismjs'
import 'prismjs/themes/prism.css'
import Demo from './Demo.vue'
const Prism =( window as any).Prism

    export default {
        components:{
            Button,Demo
        },
        setup(){
           const bool= ref(false)
           return {bool,SwitchNormal,SwitchDisabled,Prism,}
        }
     
    }
</script>

<style lang="scss" scoped>


</style>