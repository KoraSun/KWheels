<template>
    <div>
      Button组件
      <h1>示例一</h1>
      <div>
           <Button theme="button">默认主题 </Button>
          <Button theme="link">链接按钮</Button>
          <Button theme="text">文本按钮</Button>
      </div>
      <h1>示例二</h1>
      <div>
           <Button size="big"> 大大大</Button>
          <Button size="normal">正正正</Button>
          <Button size="small">小小小</Button>
      </div>
     
    </div>
</template>

<script lang ="ts">
import Button from '../lib/Button.vue';
    export default {
        components:{Button},
        setup(){
            const onClick=()=>{
                console.log('hi')

            }
            return {onClick}

        }
        
    }
</script>

<style lang="scss" scoped>

</style>