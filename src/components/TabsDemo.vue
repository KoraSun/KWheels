<template>
    <Demo :component="TabsNormal"/>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
import Demo from './Demo.vue'
import TabsNormal from '../components/Tabs/TabsNormal.vue'
    export default {
        components:{Tabs,Tab,Demo},
        setup(){
           return {TabsNormal}
        }     
    }
</script>

<style lang="scss" scoped>

</style>