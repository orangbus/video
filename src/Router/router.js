import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Content from '../components/Content'
// import Video from '../components/Video/Video'
import M3u8 from '../components/Video/M3u8'
import miss from '../components/404'

const routes = [
    {
      path : '/',
      name : 'Content',
      component: Content
    },
    {
      path : '/m3u8',
      name : 'M3u8',
      component: M3u8
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