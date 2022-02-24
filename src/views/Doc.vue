<template>
    <div>
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
        <div class="content">
            <aside v-if="menuVisible" >
                <h2>组件列表</h2>
                <ol>
                    <li>
                        <router-link to="/doc/switch">Switch 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/button">Button 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/dialog">Dialog 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/tabs">Tabs 组件</router-link>
                    </li>
                </ol>
            </aside>
            <main>主内容</main>
        </div>
    </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
import { inject ,Ref} from 'vue'
  export default{
      components:{Topnav},
      setup(){
          const menuVisible = inject<Ref<boolean>>("menuVisible");
          console.log('get'+ menuVisible.value)
          const toggleMenu =()=>{
              menuVisible.value =!menuVisible.value
              console.log('click'+menuVisible.value)
          }
          return { menuVisible,toggleMenu };
      }
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
  
  aside{
      background:rgb(203, 238, 248);
      width: 140px;
      padding: 16px;
      position: fixed;
      top: 0;
      left: 0;
      padding-top: 70px;
      > h2{
          margin-bottom: 4px;
      }
      > ol{
          > li{
              margin:5px;
              padding-inline: 4px 0;
          }
      }
  }
</style>

