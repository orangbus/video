import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Content from '../components/Content'
// import Video from '../components/Video/Video'
import miss from '../components/404'

const routes = [
    {
      path : '/',
      name : 'Content',
      component: Content
    },
    {
        path: '*',
        name: '404',
        component: miss
    }
];

export default new VueRouter({
    mode : 'history',
    routes
})