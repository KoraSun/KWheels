<template>
    <div>
      Button组件
      <h1>示例一</h1>
      <div>
          <Button>默认按钮</Button>
           <Button theme="button">
                你好     
          </Button>
          <Button theme="link">链接按钮</Button>
          <Button theme="text">文本按钮</Button>
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