<template>
  <div id="app">
    <img src="./assets/logo.png"/>
    <greeting-component></greeting-component>
  </div>
</template>

<script type="text/babel">
  import greetingComponent from '@/components/Greeting'

  export default {
    name: 'App',
    components: {
      greetingComponent
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
