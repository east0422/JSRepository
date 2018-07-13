<template>
  <div id="app" class="container">
    <ul class="nav nav-tabs" role="tablist">
      <li
        :class= "index === curtabindex ? 'active' : ''"
        v-for="(list, index) in shoppinglists"
        role="presentation"
        :key="index">
        <shopping-list-title-component
          :id="list.id"
          :title="list.title">
        </shopping-list-title-component>
      </li>
    </ul>
    <div class="tab-content">
      <div
        :class="['tab-pane', index === curtabindex ? 'active' : '']"
        v-for="(list, index) in shoppinglists"
        :key="index"
        role="tabpanel"
        :id="list.id">
        <shopping-list-component
          :id="list.id"
          :title="list.title"
          :items="list.items">
        </shopping-list-component>
      </div>
    </div>
  </div>
</template>

<script>
  import ShoppingListTitleComponent from '@/components/ShoppingListTitleComponent'
  import ShoppingListComponent from '@/components/ShoppingListComponent'
  import {mapState} from 'vuex'
  export default {
    components: {
      ShoppingListTitleComponent,
      ShoppingListComponent
    },
    computed: mapState([
      'shoppinglists',
      'curtabindex'
    ])
  }
</script>

<style>
  .container {
    width: 40%;
    margin: 20px auto 0px auto;
  }
</style>
