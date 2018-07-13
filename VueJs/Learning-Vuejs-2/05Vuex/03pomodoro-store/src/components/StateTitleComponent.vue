<template>
  <div>
    <h3>{{statetitle}}</h3>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data () {
      return {}
    },
    computed: mapState({
      statetitle (state) {
        return state.isworking ? 'Work!' : 'Rest!'
      }
    })
  }
</script>

<style>
</style>
