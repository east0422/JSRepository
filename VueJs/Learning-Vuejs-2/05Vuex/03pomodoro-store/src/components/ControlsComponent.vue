<template>
  <div>
    <button title="start" :disabled='isStarted && !isPaused' @click="START">
      <i class="glyphicon glyphicon-play"></i>
    </button>
    <button title="pause" :disabled='!isStarted || isPaused' @click="PAUSE">
      <i class="glyphicon glyphicon-pause"></i>
    </button>
    <button title="stop" :disabled='!isStarted' @click="STOP">
      <i class="glyphicon glyphicon-stop"></i>
    </button>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import {START, PAUSE, STOP} from '../vuex/mutation_types'

  export default {
    computed: mapGetters([
      'isStarted',
      'isPaused',
      'isStopped'
    ]),
    methods: mapActions([
      START,
      PAUSE,
      STOP
    ])
  }
</script>

<style scoped>
  button:disabled i {
    color: gray;
  }
</style>
