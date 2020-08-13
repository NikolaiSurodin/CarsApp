<template>
  <div>
    <cars-list :items="cars"></cars-list>

  </div>
</template>

<script>
import CarsList from './_partial/CarsList'

const data = require('@/assets/cars.json')

export default {
  name: 'Main',
  components: {
    CarsList
  },
  data () {
    return {
      cars: []
    }
  },
  created () {
    this.cars = [...data]
  }
}
</script>

<style scoped>

</style>
