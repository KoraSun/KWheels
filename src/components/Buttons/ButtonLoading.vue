<demo>
支持loading
</demo>

<template>
    <div>
        <Button :loading="true">loading</Button>
       <Button>加载完毕</Button>
    </div>
</template>
<script lang="ts">
import Button from "../../lib/Button.vue"
export default{
    components:{Button}
}
</script>