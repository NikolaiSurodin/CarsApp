<template>
  <div>
    <p> Выберите интересущую вас марку авто</p>
    <cars-list-item v-for="item in items" :key="item.id" :item="item">

    </cars-list-item>
  </div>

</template>

<script>
import CarsListItem from './CarsListItem'

export default {
  name: 'CarsList',
  components: {
    CarsListItem
  },
  props: ['items']
}

</script>

<style scoped>

</style>
