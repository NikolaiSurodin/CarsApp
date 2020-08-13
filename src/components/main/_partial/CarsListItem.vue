<template>
  <div>
    <router-link :to="item.id">
      {{ item.name }}
    </router-link>
  </div>

</template>

<script>
export default {
  name: 'CarsListItem',
  props: ["item"]
}
</script>

<style scoped>

</style>
