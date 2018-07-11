<template id="greetings">
  <div>
    <form-component v-model="user"></form-component>
    <hello-component :user="user"></hello-component>
  </div>
</template>

<script type="text/babel">
  import formComponent from './Form'
  import helloComponent from './Hello'

  export default {
    data () {
      return {
        user: 'east'
      }
    },
    components: {
      formComponent,
      helloComponent
    }
  }
</script>

<style>
</style>
