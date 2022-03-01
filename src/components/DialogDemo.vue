<template>
    <div> Dialog组件</div>
    <h1>示例一</h1>
    <Button @click="toggle"> toggle</Button>
    <Dialog v-model:visible="showDialog" 
            :closeOnClickOverlay="false"
            :ok="f1" :cancel="f2" >
            <template v-slot:content>
                <div>hi</div>
                <div>自定义内容</div>     
            </template
            ><template v-slot:title>
                <div>自定义标题</div>     
            </template>
           
    </Dialog>
    <h1>示例一</h1>
    <Button @click="present">present</Button>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import { ref } from 'vue'
import {openDialog} from '../lib/openDialog'
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
            const present=()=>{
                openDialog({title:'标题',content:'你好',
                ok(){console.log('ok')},
                cancel(){console.log('cancel')},})
            }
            return {showDialog,toggle,f1,f2,present}
        }        
    }
</script>

<style lang="scss" scoped>

</style>