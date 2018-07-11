<template>
  <div>
    <button
      title="start"
      :disabled="state === 'started'"
      @click="startClicked">
      <i class="glyphicon glyphicon-play"></i>
    </button>
    <button
      title="pause"
      :disabled="state !== 'started'"
      @click="pauseClicked">
      <i class="glyphicon glyphicon-pause"></i>
    </button>
    <button
      title="stop"
      :disabled="state !== 'started' && state !== 'paused'"
      @click="stopClicked">
      <i class="glyphicon glyphicon-stop"></i>
    </button>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    props: {
      state: {
        type: String,
        default: 'started'
      }
    },
    methods: {
      startClicked () {
        this.$emit('start')
      },
      pauseClicked () {
        this.$emit('pause')
      },
      stopClicked () {
        this.$emit('stop')
      }
    }
  }
</script>

<style scoped>
  button:disabled i {
    color: gray;
  }
</style>
