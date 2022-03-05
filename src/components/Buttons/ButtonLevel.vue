<demo>
支持level
</demo>

<template>
    <div>
           <Button level="primary" theme="level">基础按钮</Button>
          <Button level="danger" theme="level">危险按钮</Button>
          <Button level="warning" theme="level">警告按钮</Button>
    </div>
</template>
<script lang="ts">
import Button from "../../lib/Button.vue"
export default{
    components:{Button}
}
</script>