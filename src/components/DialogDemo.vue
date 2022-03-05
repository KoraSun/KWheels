<template>   
     <Demo :component="DialogNormal"/>
     <Demo :component="DialogOverlay" />
     <Demo :component="DialogInfo"/>
     <Demo :component="DialogOneStep" />
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import Demo from './Demo.vue'
import DialogInfo from './Dialogs/DialogInfo.vue'
import DialogNormal from './Dialogs/DialogNormal.vue'
import DialogOverlay from './Dialogs/DialogOverlay.vue'
import DialogOneStep from './Dialogs/DialogOneStep.vue'
export default {
        components:{Dialog,Button,Demo},
        setup(){
            return {
                DialogInfo,
                DialogNormal,
                DialogOverlay,
                DialogOneStep}
        }        
}
</script>

<style lang="scss" scoped>

</style>