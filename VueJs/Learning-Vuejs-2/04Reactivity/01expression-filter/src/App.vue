<template>
  <div id="app">
    <hello></hello>
    <h2 class="app-expression">5 x 5 = {{Math.pow(5, 2)}}</h2>
    <h2 class="app-filter">Filter -> {{'Filter' | uppercase | addsuffix}}</h2>
    <button @click="start" :disabled="interval !== 0">开始计时器</button>
    <button @click="stop" :disabled="interval === 0">停止计时器</button>
    <span>{{min | leftpad}}: {{sec | leftpad}}</span>
  </div>
</template>

<script>
  import Hello from './components/Hello.vue'

  export default {
    name: 'app',
    data () {
      return {
        sec: 0,
        min: 0,
        interval: 0
      }
    },
    components: {
      Hello
    },
    methods: {
      startCount () {
        if (this.sec >= 59) {
          this.min += 1
          this.sec = 0
        } else {
          this.sec++
        }

        if (this.min > 59) {
          this.min = 0
        }
      },
      start () {
        if (this.interval === 0) {
          this.interval = setInterval(this.startCount, 1000)
        }
      },
      stop () {
        clearInterval(this.interval)
        this.sec = 0
        this.min = 0
        this.interval = 0
      }
    },
    destoryed () {
      clearInterval(this.interval)
    }
  }
</script>

<style type="text/css" scoped>
  .app-filter {
    width: 100%;
    text-align: center;
  }
  .app-expression {
    width: 100%;
    text-align: center;
  }
  button:disabled i {
    color: gray;
  }
</style>
