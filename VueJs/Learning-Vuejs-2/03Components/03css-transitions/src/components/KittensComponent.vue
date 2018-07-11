<template>
  <div class="well">
    <img :src="catImgSrc" />
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    props: {
      catImgSrc: {
        type: String,
        default: require('@/assets/cat1.jpg')
      }
    }
  }
</script>

<style>
</style>
