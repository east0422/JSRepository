<template>
  <div class="input-group">
    <input type="text" @keyup.enter="addItem" v-model="newItem" placeholder="add shopping list item" class="form-control">
    <span class="input-group-btn">
      <button class="btn btn-default" type="button" @click="addItem">Add!</button>
    </span>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        newItem: ''
      }
    },
    methods: {
      addItem () {
        this.$emit('additem', this.newItem)
        this.newItem = ''
      }
    }
  }
</script>

<style>
</style>
