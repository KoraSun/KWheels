<template>
    <div class="layout">
        <div class="nav">
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
            <main>
                <router-view/>
            </main>
        </div>
    </div>
</template>

<script lang="ts">
import { inject ,Ref} from 'vue'
  export default{
      setup(){
          const menuVisible = inject<Ref<boolean>>("menuVisible");
          const toggleMenu =()=>{
              menuVisible.value =!menuVisible.value
              console.log('click'+menuVisible.value)
          }
          return { menuVisible,toggleMenu };
      }
  }

</script>

<style lang="scss" scoped>
 .layout{
     display: flex;
     flex-direction: column;
     height: 100vh;
     > .nav{
         flex-shrink: 0;
     }
     > .content{
         flex-grow: flex;
         padding-top: 58px;
         padding-left: 156px;
         @media(max-width: 500px){
             padding-left: 0;
         }
     }

 }
 .topnav{
      background:rgba(119, 183, 243);
      display: flex;
      padding: 16px;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 10;
      justify-content: fixed;
      align-items: center;
      box-shadow: 0 5px 5px rgba(#333,0.1);
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
  .content{
      display: flex;
      > aside{
          flex-shrink: 0;
      }
      > main{
          height: 100vh;
          flex-grow: 1;
          padding:16px;
          background: #fff;
          overflow: auto;
      }
  }
  aside{
      background:rgb(203, 238, 248);
      width: 150px;
      padding: 16px;
      position: fixed;
      top: 0;
      left: 0;
      padding-top: 70px;
      height: 100%;
      box-shadow: 5px 0 5px rgba(#333,0.1);
      > h2{
          margin-bottom: 4px;
      }
      > ol{
          > li{
              padding: 4px 0;
          }
      }
  }
  main{
      overflow: auto;
  }
</style>

