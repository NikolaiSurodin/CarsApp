<template>
  <div>{{ $route.params.name }}
    <models-list :items="models" :current="car"></models-list>
    <router-view></router-view>

  </div>
</template>

<script>
import ModelsList from './_partial/ModelsList'

const data = require('@/assets/cars.json')
export default {
  name: 'Index',
  components: {ModelsList},
  data () {
    return {
      car: {},
      models: []
    }
  },
  created () {
    let cars = data.find(a => this.$route.params.name === a.id)
    console.log(cars)
    if (cars) {
      this.car = cars
      this.models = [...this.car.models]
    }
  }

}
</script>

<style scoped>

</style>
