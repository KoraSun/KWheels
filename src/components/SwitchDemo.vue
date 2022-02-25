<template>
    <div>
      <Switch v-model:value="access" />
    </div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue'
import {ref} from 'vue'
    export default {
        components:{Switch},
        setup(){
           const access= ref(false)
           return {access}
        }
     
    }
</script>

<style lang="scss" scoped>

</style>