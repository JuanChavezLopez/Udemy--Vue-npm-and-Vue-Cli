<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Dumnizeul con noi.....la vida es buena!!! gracias!!"/> -->
    <count/>
  </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld.vue'
  import Count from './components/Count.vue'

  export default {
    name: 'App',
    components: {
      // HelloWorld,
      Count
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
