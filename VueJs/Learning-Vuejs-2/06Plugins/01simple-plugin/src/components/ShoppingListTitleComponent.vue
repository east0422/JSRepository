<template>
  <a
    :href="'#' + id "
    :aria-controls="id"
    role="tab"
    data-toggle="tab"
    @click="changetab(id)">
    {{title}}
    <i class="glyphicon glyphicon-remove" @click="deleteShoppingList(id)"></i>
  </a>
</template>

<script>
  import {CHANG_TAB, DELETE_SHOPPING_LIST} from '@/vuex/mutations_name'
  import {mapActions} from 'vuex'
  export default{
    props: ['id', 'title'],
    methods: mapActions({
      changetab: CHANG_TAB,
      deleteShoppingList: DELETE_SHOPPING_LIST
    })
  }
</script>
