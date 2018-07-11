<template id="hello" >
  <div class="hellotemplate">
    <h1>{{msg}} {{user}}</h1>
  </div>
</template>

<script type="text/babel">
  export default {
    data () {
      return {
        msg: 'hello'
      }
    },
    props: {
      user: {
        type: String,
        default: 'east'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hellotemplate {
    border: 1px solid red;
  }
</style>
