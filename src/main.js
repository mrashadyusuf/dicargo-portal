// import Vue from 'vue'
// import App from './App.vue'



// import LoadScript from 'vue-plugin-load-script'
// Vue.use(LoadScript);

// global.jQuery = require('jquery');
// var $ = global.jQuery;
// window.$ = $;



// import './assets/js/jquery.js'
// import './assets/js/jquery-1.11.1.min.js'
// import './assets/js/jquery.flexslider-min.js'
// import './assets/js/jquery.magnific-popup.min.js'
// import './assets/js/easing.js'
// import './assets/js/jquery.easypiechart.js'
// import './assets/js/jquery.appear.js'
// import './assets/js/jquery.parallax-1.1.3.js'
// import './assets/js/jquery.mixitup.min.js'
// import './assets/js/bootstrap.min.js'
// import './assets/js/custom.js'







// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')


// bootstrap
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';




Vue.use(BootstrapVue);
// end bootstrap

import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import VueRouter from 'vue-router';
// import { component } from 'vue/types/umd';  /*never used*/ 
import contentCekResi from './components/contentCekResi.vue'
import contentCekOngkir from './components/cekongkir.vue'
import contactUs from './components/contactUs.vue'
import Services from './components/Services.vue'




Vue.config.productionTip = false

Vue.use(VueRouter);
const routes =[
  {path: '',component:contentCekResi},
  {path: '/cekResi',name:"CekResi",component:contentCekResi},
  {path: '/cekOngkir',name:"CekOngkir",component:contentCekOngkir},
  {path: '/contactus',name:"ContactUS",component:contactUs},
  {path: '/Services',name:"Services", component:Services},


]


const router = new VueRouter({
  routes,
  mode:'history'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

