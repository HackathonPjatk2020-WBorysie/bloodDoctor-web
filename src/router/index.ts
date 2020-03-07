import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Camera from '../views/Camera.vue'
import Form from '../views/Form.vue'
  import FirstSection from '../views/form-sections/FirstSection.vue'
  import SecondSection from '../views/form-sections/SecondSection.vue'
  import ThirdSection from '../views/form-sections/ThirdSection.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/form',
    name: 'Form',
    component: Form,
    children: [
      { path: 'a', component: FirstSection },
      { path: 'b', component: SecondSection },
      { path: 'c', component: ThirdSection }
    ]
  },
  {
    path: '/camera',
    name: 'Camera',
    component: Camera,
  }
];

const router = new VueRouter({
  routes
});

export default router
