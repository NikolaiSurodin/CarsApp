<template>
  <div><router-link :to="`/${current.id}/${item.id}`">
    {{ item.name }}
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
