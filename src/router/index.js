import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/main/Index'
import Models from '@/components/models/Index'
import Model from '@/components/model/Index'

Vue.use(Router)

export default new Router({
  mode: 'history', // https://router.vuejs.org/api/#mode
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main

    },

    {
      path: '/:name',
      component: {
        render(c) {
          return c('router-view')
        }
      },
      children: [
        {
          path: '',
          component: Models,
        },
        {
          path: ':model',
          component: Model
        }

      ]

    }
  ]

})
