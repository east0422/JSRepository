<template>
  <ul>
    <item-component v-for="(item, index) in items" :item="item" :id="id" :key="index"></item-component>
  </ul>
</template>

<script>
  import ItemComponent from '@/components/ItemComponent'
  export default {
    components: {
      ItemComponent
    },
    props: ['items', 'id']
  }
</script>

<style>
</style>
