<template id="form" >
  <div class="formtemplate">
    <label for="name">What's your name?</label>
    <input v-bind:value="value" type="text" id="name" v-on:input="onInput">
  </div>
</template>

<script type="text/babel">
  export default {
    data () {
      return {
        msg: 'form'
      }
    },
    props: {
      value: {
        type: String,
        default: 'east'
      }
    },
    methods: {
      onInput (event) {
        this.$emit('input', event.target.value)
      }
    }
  }
</script>

<style>
  .formtemplate {
    border: 1px solid green;
  }
</style>
