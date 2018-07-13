<template>
  <a
    :href="'#' + id "
    :aria-controls="id"
    role="tab"
    data-toggle="tab"
    @click="changetab(id)">
    {{title}}
  </a>
</template>

<script>
  import {CHANG_TAB} from '@/vuex/mutations_name'
  import {mapActions} from 'vuex'
  export default{
    props: ['id', 'title'],
    methods: mapActions({
      changetab: CHANG_TAB
    })
  }
</script>
