<template>
  <div>
    <h2>
      <router-link to="/"> home</router-link>
    </h2>
    <hr>
    <p>model index</p>
    <p>
      <button class="btn" v-on:click="showImg = !showImg">Показать/скрыть авто</button>
    </p>
    <p><img v-show="showImg" src="../../assets/136.jpg" height="300" width="400"/></p>
    {{ $route.params.model }}
    <p>Lorem ipsum dolosit amet, consectetur adipisicing elit. Corporis cupiditate debitis esse itaque necessitatibus
      quae quidem recusandae reiciendis, similique tenetur velit vitae! Ad doloribus fugiat illo perferendis
      perspiciatis porro praesentium.</p>
    <div class="footer">
      <hr>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br>
        Eum maiores nulla quia sint tempora. A aperiam corporis dignissimos
        labore minus pariatur quis sit. Accusamus illo laudantium provident rerum sed voluptas.</p>
    </div>
  </div>

</template>

<script>

export default {
  name: 'Model',
  props: ['item'],
  data() {
    return {
      showImg: false
    }
  }
}
</script>

<style scoped>
.btn {

  border-radius: 10%;
}
</style>
