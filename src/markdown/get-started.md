# 使用

请先[安装](#/doc/install)

然后在你的代码中输入下面的代码
使用组件的时候需要注意样式文件也要单独引入

```
import {Button,Tabs,Tab,Switch,Dialog，} from "kowheels"
import "kowheels/dist/lib/kowheels.css"
```
就可以使用我提供的组件了。

## 完整组件列表和引入方式

代码示例：
```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import {Button,Switch,Dialog,Tabs,Tab} from "kowheels"
export default {
  components: {Button,Switch,Dialog,Tabs,Tab}
}
</script>

```