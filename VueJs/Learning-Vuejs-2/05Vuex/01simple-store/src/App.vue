<template>
  <div>
    <show-greetings-component></show-greetings-component>
    <change-greetings-component></change-greetings-component>
  </div>
</template>

<script>
  import ShowGreetingsComponent from './components/ShowGreetingsComponent.vue'
  import ChangeGreetingsComponent from './components/ChangeGreetingsComponent.vue'
  
  export default {
    data () {
      return {}
    },
    components: {
      ShowGreetingsComponent,
      ChangeGreetingsComponent
    }
  }
</script>