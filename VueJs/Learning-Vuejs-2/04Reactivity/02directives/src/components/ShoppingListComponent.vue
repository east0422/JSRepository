<template>
  <div>
    <h2>{{title}}</h2>
    <add-item-component @additem="additem"></add-item-component>
    <items-component :items="items"></items-component>
    <div class="footer">
      <hr />
      <change-title-component
        :title="title"
        @changetitle="changeTitle">
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
    },
    methods: {
      additem (item) {
        if (item.trim()) {
          this.items.push({
            text: item.trim(),
            checked: false
          })
        }
      },
      changeTitle (text) {
        this.$emit('onchangetitle', this.id, text)
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
