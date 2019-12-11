<template>
    <div class="Video">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2>{{title}}</h2>
                    <h2>{{title}}</h2>
                    <h2 style="color: white">name:{{this.$store.state.text}}</h2>
                    <h2 style="color: white">Auther:{{this.$store.state.SiteInfo.auther}}</h2>
                    <button @click="CreateInfo" class="btn btn-success btn-lg">create</button>&nbsp;&nbsp;
                    <button @click="GetInfo" class="btn btn-success btn-lg">list</button>&nbsp;&nbsp;
                    <button @click="DelInfo" class="btn btn-success btn-lg">delete</button>
                    <button @click="Actionmap" class="btn btn-success btn-lg">acions</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        name:'Video',
        data(){
            return{
                title:"video"
            }
        },
        created() {
          this.instance = this.axios.create({
              baseURL: 'https://www.8k.cm/',
              timeout: 3000,
              headers:{
                  'Access-Control-Allow-Origin':'*',
                  'Access-Control-Allow-Methods':'get',
                  'Access-Control-Allow-Headers':'x-requested-with,content-type',
                  'X-Requested-With':'XMLHttpRequest'
              }
          });
        },
        // computed(){
        //     // eslint-disable-next-line no-console
        //   console.log(this)
        // },
        methods:{
            ...mapActions([
                'Player',
            ]),
            CreateInfo(){
                this.Player('123');
                // this.$store.commit('CreateInfo','123')
            },
            GetInfo(){
                this.$store.dispatch('Player')
            },
            DelInfo(){
                //获取 Vuex 的 state 值
                this.$store.state.SiteInfo.sitename;
                // eslint-disable-next-line no-console
                console.log(this.$store.state.SiteInfo.sitename);
                //触发 vuex-mutations 的方法
                this.$store.commit('getInfo','changed111');
                // eslint-disable-next-line no-console
                // console.log(this.$store.commit('getInfo','changed111'));
            },
            Actionmap(){// 跨域问题 is not ok
                // eslint-disable-next-line no-console
                console.log(this);
                // const api = https://www.8k.cm/inc/api.php";
                const api = "/inc/api.php";
                // this.axios.get(api).then((res) => {
                //     // eslint-disable-next-line no-console
                //     console.log(res.data)
                // }).catch((err) => {
                //     // eslint-disable-next-line no-console
                //     console.log(err)
                // });
                this.instance.get(api).then((res) => {
                    // eslint-disable-next-line no-console
                    console.log("res:"+res)
                }).then( (err) => {
                    // eslint-disable-next-line no-console
                    console.log(err);
                });
            },

        }

    };
</script>
