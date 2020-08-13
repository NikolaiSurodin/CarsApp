<template>
  <div>
    <models-list-item v-for="item in items" :key="item.id" :item="item" :current="current">

    </models-list-item>
  </div>
</template>

<script>
import ModelsListItem from './ModelsListItem'
export default {
  name: 'ModelsList',
  components: {ModelsListItem},
  props: ['items', 'current']
}
</script>

<style scoped>

</style>
