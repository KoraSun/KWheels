<template>
    <div> Dialog组件</div>
    <h1>示例一</h1>
    <Button @click="toggle"> toggle</Button>
    <Dialog v-model:visible="showDialog" 
            :closeOnClickOverlay="false"
            :ok="f1" :cancel="f2" >
            <div>hi</div>
            <div>自定义内容</div>     
    </Dialog>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import { ref } from 'vue'
export default {
        components:{Dialog,Button },
        setup(){
            const showDialog = ref(false)
            console.log( showDialog.value)
            const toggle=()=>{
                showDialog.value =! showDialog.value
            }
            const f1=()=>{return false}
            const f2=()=>{}   
            return {showDialog,toggle,f1,f2}
        }        
    }
</script>

<style lang="scss" scoped>

</style>