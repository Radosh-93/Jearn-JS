import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main.vue'
import Form from '../components/Form.vue'
import Product from '../components/Product.vue'
import EditProduct from '../components/EditProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'iMain',
    component: Main,
    props: true
  },
  {
    path: '/form',
    name: 'Form',
    component: Form,
    props: true
  },
  {
    path: '/product/:id',
    name: 'Id',
    component: Product,
    props: true,
    children: [
      {
        path: 'edit',
        name: 'Edit',
        component: EditProduct,
        props: true
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
