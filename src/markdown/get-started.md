# 使用

请先[安装](#/doc/install)

然后在你的代码中输入下面的代码

```
import {Button,Tabs,Switch,Dialog} from "Kwheels"
```
就可以使用我提供的组件了。

## Vue 单文件引入

代码示例：
```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import {Button} from "Kwheels"
export default {
  components: {Button}
}
</script>

```