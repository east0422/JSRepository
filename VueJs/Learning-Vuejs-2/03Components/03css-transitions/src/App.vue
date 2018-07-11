<template>
  <div id="app" class="container">
    <h2>
      <span>Pomodoro</span>
      <controls-component
        :state="state"
        @start="start"
        @pause="pause"
        @stop="stop">
      </controls-component>
    </h2>
    <state-title-component :title="title"></state-title-component>
    <countdown-component :min="min" :sec="sec"></countdown-component>
    <transition name="fade">
      <kittens-component v-show="showkittens" :catImgSrc="catImgSrc"></kittens-component>
    </transition>
  </div>
</template>

<script>
  import ControlsComponent from './components/ControlsComponent'
  import CountdownComponent from './components/CountdownComponent'
  import KittensComponent from './components/KittensComponent'
  import StateTitleComponent from './components/StateTitleComponent'

  const POMODORO_STATES = {
    WORK: 'work',
    REST: 'rest'
  }
  const STATES = {
    STARTED: 'started',
    STOPPED: 'stopped',
    PAUSED: 'paused'
  }
  const WORKING_TIME_LENGTH_IN_MINUTES = 1
  const RESTING_TIME_LENGTH_IN_MINUTES = 5
  export default {
    data () {
      return {
        state: STATES.STOPPED,
        minute: WORKING_TIME_LENGTH_IN_MINUTES,
        second: 0,
        pomodoroState: POMODORO_STATES.WORK,
        catindex: 1,
        interval: 0
      }
    },
    computed: {
      title () {
        return this.pomodoroState === POMODORO_STATES.WORK ? 'Work!' : 'Rest!'
      },
      min () {
        if (this.minute < 10) {
          return '0' + this.minute
        }
        return '' + this.minute
      },
      sec () {
        if (this.second < 10) {
          return '0' + this.second
        }
        return '' + this.second
      },
      catImgSrc () {
        return require('@/assets/cat' + this.catindex + '.jpg')
      },
      showkittens () {
        return this.pomodoroState === POMODORO_STATES.WORK
      }
    },
    components: {
      ControlsComponent,
      CountdownComponent,
      KittensComponent,
      StateTitleComponent
    },
    methods: {
      start: function () {
        this.state = STATES.STARTED
        this.pomodoroState = POMODORO_STATES.WORK
        this._tick()
        this.interval = setInterval(this._tick, 1000)
      },
      pause: function () {
        this.state = STATES.PAUSED
        clearInterval(this.interval)
      },
      stop: function () {
        this.state = STATES.STOPPED
        clearInterval(this.interval)
        this.pomodoroState = POMODORO_STATES.REST
        this.minute = WORKING_TIME_LENGTH_IN_MINUTES
        this.second = 0
      },
      _tick: function () {
        if (this.second % 10 === 0) {
          this.catindex = Math.floor(Math.random() * 3) + 1
        }
        // if second is bigger than 0, just decrement second
        if (this.second > 0) {
          this.second--
          return
        }
        // if second is 0 and minute is bigger than 0, decrement minute and set second to 59
        if (this.minute > 0) {
          this.minute--
          this.second = 59
          return
        }
        // if second is 0 and minute is 0, toggle working/resting intervals
        this.pomodoroState = this.pomodoroState === POMODORO_STATES.WORK ? POMODORO_STATES.REST : POMODORO_STATES.WORK
        if (this.pomodoroState === POMODORO_STATES.WORK) {
          this.minute = WORKING_TIME_LENGTH_IN_MINUTES
        } else {
          this.minute = RESTING_TIME_LENGTH_IN_MINUTES
        }
      }
    },
    mounted: function () {
      this.start()
    }
  }
</script>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 2s
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>
