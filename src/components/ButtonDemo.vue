<template>
    <div>
      <Demo :component="ButtonTheme" />
      <Demo :component="ButtonSize" />
      <Demo :component="ButtonLevel"/>
      <Demo :component="ButtonDisabled"/>
      <Demo :component="ButtonLoading"/>
    </div>
</template>

<script lang ="ts">
import Button from '../lib/Button.vue'
import Demo from './Demo.vue'
import ButtonTheme from './Buttons/ButtonTheme.vue'
import ButtonSize from './Buttons/ButtonSize.vue'
import ButtonLevel from './Buttons/ButtonLevel.vue'
import ButtonDisabled from './Buttons/ButtonDisabled.vue'
import ButtonLoading from './Buttons/ButtonLoading.vue'
    export default {
        components:{Demo,Button},
        setup(){
            return{
                ButtonTheme,
                ButtonSize,
                ButtonLevel,
                ButtonDisabled,
                ButtonLoading
            }

        },
    }  
</script>

<style lang="scss" scoped>
$border-color:#d9d9d9;
.demo{
    border:1px solid $border-color;
    margin: 16px 0 32px;
    >h2{
        font-size: 20px;
        padding: 8px 16px;
        border-bottom: 1px solid $border-color;

    }
    &-component{
        padding: 16px;

    }
    &-actions{
        padding: 8px 16px;
        border-top: 1px dashed $border-color;

    }
    &-code{
        padding: 8px 16px;
        border-top: 1px dashed $border-color;

        >pre{
            line-height: 1.1;
            font-family: Consolas,'Courier New', Courier, monospace;
            margin:0;
        }
    }
}


</style>