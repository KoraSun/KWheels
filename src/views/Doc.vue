<template>
    <div class="layout">
        <div class="nav">
            <div class="topnav">
                <svg class="toggleAside" 
                @click="toggleMenu">
                        <use xlink:href="#icon-menu"></use>
                </svg>
                <router-link to="/" class="logo" >
                     <svg class="icon" >
                        <use xlink:href="#icon-k-logo"></use>
                    </svg>
                </router-link>
                <ul class="menu">
                     <a href="https://github.com/KoraSun/Kwheels">Github</a>
                </ul>    
            </div>
        </div>

        <div class="content">
            <aside v-if="menuVisible" >
                <h2>文档</h2>
                <ol>
                    <li>
                        <router-link to="/doc/intro">介绍</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/install">安装</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/get-started">开始使用</router-link>
                    </li>
                </ol>
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
$color:#0661a8;
$blue:rgb(119, 183, 243);

 .layout{
     display: flex;
     flex-direction: column;
     height: 100vh;
     > .nav{
         flex-shrink: 0;
     }
     > .content{
         flex-grow: flex;
         padding-top: 70px;
         padding-left: 285px;
         @media(max-width: 500px){
             padding-left: 0;
         }
        >aside{
            z-index:10;
            background: white;
            position: absolute;
            width: 285px;
            padding: 16px;
            position: fixed;
            top: 0;
            left: 0;
            padding: 16px 0;
            padding-top: 70px;
            height: 110vh;
            box-shadow: 5px 0 5px rgba(#333,0.1);
            transition: all 0.4s cubic-bezier(0.68, 0.18, 0.53, 0.18) 0.1s;
            @media(max-width:500px){
                width:200px;
            }
            
            > h2{
                margin-bottom: 4px;
                margin-top: 16px;
                padding: 0 30px;
            }
            > ol{
                line-height: 40px;
                > li{
                    color:$color;
                    //padding: 4px 0;
                    >.router-link-active{
                        background: #dbe6fb;
                        border-right: 3px solid $color;

                    }
                    >a{
                        position: relative;
                        height: 40px;
                        display: block;
                        padding: 4px 30px;
                        text-decoration: none;
                        &:hover{
                            background:#dbe6fb;
                            border-bottom: none;
                        }

                    }
                        
                }
            }
        }
        > main{
          height: 100vh;
          flex-grow: 1;
          padding:28px;
          background: #fff;
          overflow: auto;
        }
     }
 }
 .topnav{
      background: white;
      color:$color;
      display: flex;
      padding: 16px;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 20;
      justify-content: fixed;
      align-items: center;
      box-shadow: 0 5px 5px rgba(#333,0.1);
      > .logo{
          max-width: 6em;
          margin-right: auto;
          > svg{
              width: 40px;
              height: 40px;
          }
      }
      > .menu{
          display: flex;
          white-space: nowrap;
          flex-wrap: nowrap;
          background:$blue;
          color:white;
          border-radius: 20px;
          padding: 0 12px;
          height: 32px;;
          line-height: 32px;
          > li{
              margin:0 1em;
          }
      }
      > .toggleAside{
             
              height:32px;
              width: 32px;
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

