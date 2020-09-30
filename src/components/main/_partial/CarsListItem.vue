<template>
  <div>
    <ul class="">
      <li>
        <router-link :to="item.id">
          {{ item.name }}

        </router-link>
      </li>
    </ul>

  </div>

</template>

<script>
export default {
  name: 'CarsListItem',
  props: ['item']
}
</script>

<style scoped>

</style>
