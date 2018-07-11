<template>
  <h3>{{ title }}</h3>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    props: {
      title: {
        type: String,
        default: 'state title'
      }
    }
  }
</script>

<style>
</style>
