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
                    <li>菜单1</li>
                    <li>菜单2</li>
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
        <svg class="icon" >
            <use xlink:href="#icon-Vue"></use>
        </svg>
        <svg class="icon" >
            <use xlink:href="#icon-TS"></use>
        </svg>
        <svg class="icon" >
            <use xlink:href="#icon-Tools"></use>
        </svg>
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
      >svg{
        width: 64px;
        height: 64px;
      }   
  }

  .topnav{
      background: white;
      color:$color;
      display: flex;
      padding: 16px;
      position: relative;
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
          a {
              margin: 0 8px;
              background: $blue;
              color:white;
              display: inline-block;
              border-radius: $border-radius;
              padding: 8px 24px;
          }      
      }
  }
</style>