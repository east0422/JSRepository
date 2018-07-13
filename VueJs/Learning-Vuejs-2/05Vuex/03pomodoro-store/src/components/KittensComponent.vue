<template>
  <div class="well">
    <img :src="catimgsrc" />
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
      }
    },
    computed: mapState({
      catimgsrc (state) {
        return 'src/assets/' + state.catimgsrc
      }
    })
  }
</script>

<style>
</style>
