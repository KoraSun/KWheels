<template>
    <button 
       class="k-switch"
       @click="toggle"
       :class="{'checked':checked}"
    >
    <span></span>
    </button>
</template>

<script lang="ts">
    export default {
        data(){
            return{
                checked:true
            }
        },
        methods:{
            toggle(){
                this.checked=!this.checked
            }
        }

        
    }
</script>

<style lang="scss" scoped>
$h:22px;
$h2:18px;
.k-switch{
    height:22px;
    width: $h*2;
    border:none;
    background: grey;
    border-radius: $h/2;
    position: relative;
    > span{
        position: absolute;
        top: 2px;
        left:2px;
        height: $h2;
        width: $h2;
        background: white;
        border-radius: $h2/2;
    }
}

.checked{
        background:rgba(119, 183, 243);
        > span{
            left:calc(100% - #{$h2} - 2px);
        }
      }
    





</style>