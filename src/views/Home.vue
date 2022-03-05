<template>
    <div>
        <div class="topnavAndBanner">
            <div class="topnav">
                <div class="logo">
                    <svg class="icon" >
                        <use xlink:href="#icon-k-logo"></use>
                    </svg>
                </div>
                <ul class="menu">
                    <li>
                        <router-link to="/doc">文档</router-link>
                    </li>
                </ul>
            </div>
            <div class="banner">
                <h1>壳 UI</h1>
                <h2>一个厉害的 UI 框架</h2> 
                <p class="actions">
                    <a href="https://github.com">Github</a>
                    <router-link to='/doc'>Start</router-link>
                </p>
            </div>
        </div>
    </div>
    <div class="features">
        <ul>
            <li>
                <svg class="icon" >
                    <use xlink:href="#icon-Vue"></use>
                </svg>
                <h3>基于Vue 3</h3>
                <p>使用了Vue 3 Composition API</p>
            </li>
            <li>
                 <svg class="icon" >
                    <use xlink:href="#icon-TS"></use>
                </svg>
                <h3>基于TypeScript</h3>
                <p>源代码采用了TypeScript 书写</p>
            </li>
            <li>
                <svg class="icon" >
                    <use xlink:href="#icon-Tools"></use>
                </svg>
                <h3>代码易读</h3>
                <p>每个组件的源代码都极其简洁</p>
            </li>
        </ul>   
    </div>
    
</template>
<script lang="ts">
import Topnav from '../components/Topnav.vue'
 export default{
     components:{Topnav},
 }
  

</script>

<style lang="scss" scoped>
$blue:rgb(119, 183, 243);
$border-radius:20px;
$color:#0661a8;
    .topnavAndBanner{
        background: linear-gradient(145deg, rgba(203,238,248,1) 0%, rgba(118,183,241,1) 100%);
        clip-path: ellipse(80% 60% at 50% 40%);
    }

    .features{
      margin:64px auto;
      padding: 0 16px;
        @media (min-width: 800px) {
            width: 800px;
            > ul {
                > li {
                    width: 50%;
                }
            }
        }
        @media (min-width: 1200px) {
            width: 1200px;
            > ul {
                > li {
                    width: 33.3333%;
                }
            }
        }
      >ul{
          display: flex;
          flex-wrap: wrap;
          >li{
              padding-left: 16px;
              margin: 16px 0;
              display: grid;
              justify-content: start;
              align-content: space-between;
              grid-template-areas: 
              "icon title"
              "icon text";
              grid-template-columns: 80px auto ;
              grid-template-rows: 1fr row;
              
              >svg{
                  grid-area: icon;
                  width: 64px;
                  height: 64px;
              }
              >h3{
                  grid-area: title;
                  font-size: 28px;

              }
              >p{
                  grid-area: text;
              }
          }
      } 
    }

    .topnav{
    
      color:$color;
      display: flex;
      padding: 16px;
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
      justify-content: fixed;
      align-items: center;
      z-index: 10;
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
          > li{
              margin:0 1em;
              margin-top: 10px;
          }
      }
    }
    .banner{
      color:$color;
      padding:100px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
       > .actions{
          padding: 8px 0;
          margin-top: 20px;
          a {
              margin: 0 8px;
              background: $blue;
              color:white;
              display: inline-block;
              border-radius: $border-radius;
              padding: 0 16px;
              height: 32px;;
              line-height: 32px;
          
          }      
      }
    }
</style>