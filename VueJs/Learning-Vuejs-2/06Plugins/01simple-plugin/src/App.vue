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
    <ul>
      <input v-model="shoppingliststitle"/>
      <button
        class="btn btn-default"
        type="button"
        @click="addShoppingListClicked">
        Add Shopping List
      </button>
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
  import {mapState, mapActions} from 'vuex'
  import * as types from '@/vuex/mutations_name'
  export default {
    data () {
      return {
        shoppingliststitle: 'new shoppingList title'
      }
    },
    components: {
      ShoppingListTitleComponent,
      ShoppingListComponent
    },
    computed: {
      ...mapState([
        'shoppinglists',
        'curtabindex'
      ])
    },
    methods: {
      ...mapActions({
        populateShoppingLists: types.POPULATE_SHOPPING_LISTS,
        addShoppingList: types.ADD_SHOPPING_LIST
      }),
      addShoppingListClicked () {
        let list = {
          title: this.shoppingliststitle,
          items: []
        }
        this.addShoppingList(list)
      }
    },
    mounted () {
      this.populateShoppingLists()
    }
  }
</script>

<style>
  .container {
    width: 40%;
    margin: 20px auto 0px auto;
  }
</style>
