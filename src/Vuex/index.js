import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// eslint-disable-next-line no-unused-vars
const store = new Vuex.Store({
    state:{
        SiteInfo:{
            sitename: "OrangBus 全网VIP解析",
            auther: "OrangBus"
        },
        Api:'http://cj.okzy.tv/inc/api.php',
        OneWordApi:'https://international.v1.hitokoto.cn'
    },
    mutations: {
        getInfo(state,val){
            state.SiteInfo.sitename = val;
            // eslint-disable-next-line no-console
            // console.log(state.SiteInfo.auther);
            // let data = "";
            // data = state.SiteInfo.auther = val;
            // data = state.SiteInfo.auther;val
            // eslint-disable-next-line no-console
            // console.log("getinfo:"+data+"---------val:"+val);
        },
        CreateInfo(state,val){
            state.SiteInfo.auther = val;
        }
    },
    actions: {
        Player ({commit}) {
            commit('CreateInfo','actions change val');
            // alert("store Player");
        }
    }
})

export default store;
