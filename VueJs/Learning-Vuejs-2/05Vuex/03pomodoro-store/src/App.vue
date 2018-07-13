<template>
  <div id="app" class="container">
    <h2>
      <span>{{'Pomodoro' | uppercase | addspace}}</span>
      <controls-component></controls-component>
    </h2>
    <state-title-component></state-title-component>
    <countdown-component></countdown-component>
    <transition name="fade">
      <kittens-component v-show="!isworking"></kittens-component>
    </transition>
  </div>
</template>

<script>
  import ControlsComponent from './components/ControlsComponent.vue'
  import CountdownComponent from './components/CountdownComponent.vue'
  import KittensComponent from './components/KittensComponent.vue'
  import StateTitleComponent from './components/StateTitleComponent.vue'
  import {mapState, mapActions} from 'vuex'
  import {START} from './vuex/mutation_types'
  
  export default {
    components: {
      ControlsComponent,
      CountdownComponent,
      KittensComponent,
      StateTitleComponent
    },
    computed: mapState([
      'isworking'
    ]),
    methods: {
      ...mapActions([
        START
      ])
    },
    mounted () {
      this.START()
    }
  }
</script>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>
