<demo>
支持disabled
</demo>

<template>
    <div>
        <Button disabled>禁用按钮</Button>
        <Button :disabled="true">禁用2</Button>
    </div>
</template>
<script lang="ts">
import Button from "../../lib/Button.vue"
export default{
    components:{Button}
}
</script>