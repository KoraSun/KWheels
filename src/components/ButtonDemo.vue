<template>
    <div>
      Button组件
      <h2>示例一</h2>
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
      <h1>示例三</h1>
      <div>
           <Button level="primary">基础按钮</Button>
          <Button level="danger">危险按钮</Button>
          <Button level="warning">警告按钮</Button>
      </div>
       <h1>示例四</h1>
       <Button disabled>禁用按钮</Button>
       <Button :disabled="true">禁用2</Button>
       <h1>示例五</h1>
       <Button :loading="true">loading</Button>
       <Button>加载完毕</Button>
     
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