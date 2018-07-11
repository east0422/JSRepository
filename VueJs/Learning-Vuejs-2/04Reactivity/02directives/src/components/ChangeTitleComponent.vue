<template>
  <div>
    <em>Change the title of your shopping list here</em>
    <input :value="title" v-on:input="onInput"/>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    props: {
      title: {
        type: String
      }
    },
    methods: {
      onInput (event) {
        this.$emit('changetitle', event.target.value)
      }
    }
  }
</script>

<style>
</style>
