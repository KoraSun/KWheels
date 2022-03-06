<demo>
信息通知
</demo>

<template>
    <div>
        <Dialog v-model:visible="showDialog"
                :TitleVisible="false"
                :CancelVisible="false"
                :ok="ok"
        >
        <p>需要您需确认以下信息</p>
        <p>......</p>
        <p>......</p>
        </Dialog>
        <Button @click="toggle">打开对话框</Button>
    </div>
</template>

<script lang="ts">
import Dialog from '../../lib/Dialog.vue'
import Button from '../../lib/Button.vue'
import { ref } from 'vue'

export default {
     components:{Dialog,Button },
        setup(){
            const showDialog = ref(false)
            const ok=()=>{return true}
            const toggle=()=>{
                showDialog.value =! showDialog.value
            }
            return {showDialog,toggle,ok}
        }         
}
</script>