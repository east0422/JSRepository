<template>
  <div class="well">
    <div class="pomodoro-timer">
      <span>{{ min + ':' + sec }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    props: {
      min: {
        type: String,
        default: '00'
      },
      sec: {
        type: String,
        default: '00'
      }
    }
  }
</script>
  .pomodoro-timer {
    color: red;
  }
<style>
</style>
