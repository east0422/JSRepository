<template>
  <div>
    <h2>{{title}}</h2>
    <add-item-component :id="id"></add-item-component>
    <items-component :items="items" :id="id"></items-component>
    <div class="footer">
      <hr />
      <change-title-component
        :id="id"
        :title="title">
      </change-title-component>
    </div>
  </div>
</template>

<script>
  import AddItemComponent from '@/components/AddItemComponent'
  import ItemsComponent from '@/components/ItemsComponent'
  import ChangeTitleComponent from '@/components/ChangeTitleComponent'
  export default {
    data () {
      return {
      }
    },
    components: {
      AddItemComponent,
      ItemsComponent,
      ChangeTitleComponent
    },
    props: {
      id: {
        type: String
      },
      title: {
        type: String
      },
      items: {
        type: Array
      }
    }
  }
</script>

<style scoped>
  .footer {
    font-size: 0.7em;
    margin-top: 20vh;
  }
</style>
