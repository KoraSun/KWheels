<demo>
一键打开Dialog
</demo>

<template>
   <Button @click="insert">打开对话框</Button>
</template>
<script lang="ts">
import Dialog from '../../lib/Dialog.vue'
import Button from '../../lib/Button.vue'
import {openDialog} from '../../lib/openDialog'
export default {
        components:{Dialog,Button},
        setup(){
            const insert=()=>{
                openDialog({title:'标题',content:'你好',
                ok(){console.log('ok')},
                cancel(){console.log('cancel')},})
            }
            return {insert}
        }        
    }

</script>