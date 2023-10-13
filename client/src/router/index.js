import Vue from 'vue'
import Router from 'vue-router'

import PhoneIndex from '@/components/Phones/Index'
import PhoneCreate from '@/components/Phones/CreatePhone'
import PhoneEdit from '@/components/Phones/EditPhone'
import PhoneShow from '@/components/Phones/ShowPhone'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/phones',
      name: 'phones',
      component: PhoneIndex
    },
    {
      path: '/phone/create',
      name: 'create-phone',
      component: PhoneCreate
    },
    {
      path: '/phone/:phoneId',
      name: 'showphone',
      component: PhoneShow
    },
    {
      path: '/phone/edit/:phoneId',
      name: 'editphone',
      component: PhoneEdit
    }
  ]
})
