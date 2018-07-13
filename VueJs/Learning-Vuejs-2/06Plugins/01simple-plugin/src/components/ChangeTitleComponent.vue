<template>
  <div>
    <em>Change the title of your shopping list here</em>
    <input :value="title" @input="onInput({id: id, title: $event.target.value})"/>
  </div>
</template>

<script>
  import {CHANGE_TITLE} from '@/vuex/mutations_name'
  import {mapActions} from 'vuex'

  export default {
    data () {
      return {}
    },
    props: {
      id: {
        type: String
      },
      title: {
        type: String
      }
    },
    methods: mapActions({
      onInput: CHANGE_TITLE
    })
  }
</script>

<style>
</style>
