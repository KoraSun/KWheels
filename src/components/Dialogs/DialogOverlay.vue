<demo>
打开遮罩层
</demo>

<template>
    <Button @click="toggle">打开对话框</Button>
    <Dialog v-model:visible="showDialog" 
            :closeOnClickOverlay="false"
            :ok="ok" :cancel="cancel" >
            <template v-slot:title>
                <div>打开遮罩层</div>     
            </template>    
            <template v-slot:content>
                <div>hi</div>
                <div>.......</div>     
            </template>
    </Dialog>
    
</template>
<script lang="ts">
import Dialog from '../../lib/Dialog.vue'
import Button from '../../lib/Button.vue'
import { ref } from 'vue'
export default {
        components:{Dialog,Button},
        setup(){
            const showDialog = ref(false)
            const toggle=()=>{
                showDialog.value =! showDialog.value
            }
            const ok=()=>{return true}
            const cancel=()=>{ return false}   
            
            return {showDialog,toggle,ok,cancel}
        }        
    }

</script>