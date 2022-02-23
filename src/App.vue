<template>
  <div>导航栏 | 
    <router-link to='/'>frank1</router-link> |
    <router-link to='/xxx'>frank2</router-link>
    <hr/>
  </div>

  <router-view />
  
</template>

<script>

export default {
  name: 'App',
  
}
</script>
