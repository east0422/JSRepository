<template>
  <ul>
    <item-component v-for="(item, index) in items" :item="item" :key="index"></item-component>
  </ul>
</template>

<script>
  import ItemComponent from '@/components/ItemComponent'
  export default {
    components: {
      ItemComponent
    },
    props: ['items']
  }
</script>

<style>
</style>
