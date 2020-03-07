import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Camera from '../views/Camera.vue'
import Form from '../views/Form.vue'
  import MorfologySection from "@/views/form-sections/MorfologySection.vue";
  import BiochemySection from "@/views/form-sections/BiochemySection.vue";
  import ImmunologySection from "@/views/form-sections/ImmunologySection.vue";

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
      { path: 'morfology', component: MorfologySection },
      { path: 'biochemy', component: BiochemySection },
      { path: 'immunology', component: ImmunologySection }
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
