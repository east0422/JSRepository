<template>
  <div class="input-group">
    <input
      type="text"
      @keyup.enter="addItem({id: id, text: newItem})"
      v-model="newItem"
      placeholder="add shopping list item"
      class="form-control">
    <span class="input-group-btn">
      <button
        class="btn btn-default"
        type="button"
        @click="addItem({id: id, text: newItem})">
        Add Item
      </button>
    </span>
  </div>
</template>

<script>
  import {ADD_ITEM} from '@/vuex/mutations_name'
  import {mapActions} from 'vuex'

  export default {
    data () {
      return {
        newItem: ''
      }
    },
    props: {
      id: {
        type: String
      }
    },
    methods: mapActions({
      addItem: ADD_ITEM
    })
  }
</script>

<style>
</style>
