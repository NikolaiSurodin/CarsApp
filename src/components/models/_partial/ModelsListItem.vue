<template>
  <div>
    <router-link :to="`/${current.description}/${item.description}`">
      {{ item.name }}
      {{item.years}}
  </router-link></div>

</template>

<script>
export default {
  name: 'ModelsListItem',
  props: ['item', 'current']
}

</script>

<style scoped>

</style>
