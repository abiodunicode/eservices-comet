require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
import routes from './routes';
import Vuetify from 'vuetify';
   Vue.use(Vuetify); 

Vue.use(VueRouter);
import App from './components/App.vue'

import store  from './store';

// VueRouter.beforeEnter( (to, form, next) =>{
//     axios.get('/api/athenticated').then(()=>{
//         next()
//     }).catch(()=>{
//         return next({ name: 'Login'})
//     })
// })


const app = new Vue({
    el: '#app',
     components: { App },
    router: new VueRouter(routes),
    vuetify: new Vuetify(),
    store,
 
    
});


