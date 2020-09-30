<template>
  <div>
    <h4>Models list</h4>
    <ul>
      <li>
        <models-list-item v-for="item in items" :key="item.id" :item="item" :current="current">

        </models-list-item>
      </li>
    </ul>

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
