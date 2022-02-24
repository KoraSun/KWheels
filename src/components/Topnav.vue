<template>

    <div class="topnav">
            <span class="toggleAside" 
            @click="toggleMenu">
            </span>
            <div class="logo" >LOGO</div>
            <ul class="menu">
                <li>菜单1</li>
                <li>菜单2</li>
            </ul>
            
        </div>
</template>
<script lang="ts">
import { inject, Ref } from '@vue/runtime-core'
export default {
    setup(){
        const menuVisible = inject<Ref<boolean>>("menuVisible"); //get
        
        const toggleMenu = () => {
         menuVisible.value = !menuVisible.value;
      };
        return { toggleMenu, menuVisible };
  },
}
</script>

<style lang="scss" scoped>
 .topnav{
      background:rgba(119, 183, 243);
      display: flex;
      padding: 16px;
      position: relative;
      z-index: 10;
      justify-content: center;
      align-items: center;
      > .logo{
          max-width: 6em;
          margin-right: auto;
      }
      > .menu{
          display: flex;
          white-space: nowrap;
          flex-wrap: nowrap;
          > li{
              margin:0 1em;
          }
      }
      > .toggleAside{
             
              height:24px;
              width: 24px;
              background: black;
              left: 16px;
              top: 50%;
              transform: translateY(-50%);
              display: none;
              position: absolute;
          }
      @media(max-width:500px){
          > .menu{display: none;}
          > .logo{margin: 0 auto;}
          >.toggleAside{display: inline-block;}

      }
  }

</style>