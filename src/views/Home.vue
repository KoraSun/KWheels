<template>
    <div>
        <div class="topnav">
            <div class="logo">LOGO</div>
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
</template>
<script lang="ts">

</script>

<style lang="scss" scoped>
  .topnav{
      background:rgba(119, 183, 243);
      display: flex;
      padding: 16px;
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
  }
  .banner{
      padding:100px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background: rgb(203, 238, 248);
       > .actions{
          padding: 8px 0;
          a {
              margin: 0 8px;
              background: rgb(119, 183, 243);
              display: inline-block;
              $h:28px;
              height: $h;
              border-radius: $h/2;
              padding: 3px 8px;
          }      
      }
  }
</style>