<template>
    <div class="container" >
        <div class="row" id="app-palyer">
            <div class="col-md-12 col-xm-12 col-sm-12">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <select class="input-group-text"  v-model="selected">
                            <option
                                    v-for="list in lists"
                                    :key="list.url"
                                    :value="list.url"
                            >
                                {{ list.name }}
                            </option>
                        </select>
                    </div>
                    <input
                            type="text"
                            class="form-control"
                            placeholder="请正确输入M3U8视频链接网址（ 如：https://orangbus.xxx/video.m3u8 "
                            v-model="inputurl"
                            @blur="Player"
                    >
                </div>
            </div>
<!--            <div class="col-md-2">-->
<!--                <button class="btn btn-primary btn-lg form-control">播 放</button>-->
<!--            </div>-->
        </div>
        <div class="row">
            <div class="col-md-12 text-left">
                <p>如何获取m3u8地址？</p>
            </div>
            <div class="col-md-2" id="app-border" v-for="(list,index) in Sources" :key="index">
                <a :href="list.url" data-toggle="tooltip" data-placement="top" :title='list.url'>{{ list.name}}</a>
            </div>
            <div class="col-md-2" id="app-border" @click="login" >
                <a href="#" data-toggle="tooltip" data-placement="top" title="请登录!" style="color: #1379ff">更多>>></a>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 text-left" id="app-tip">
                以上资源来自网上整理，如有争议，请尽快联系站长删除，谢谢！！
            </div>
        </div>
    </div>
</template>
<script>
    import DataList from '../../data'
    import layer from 'layui-layer';
    export default {
        name: 'M3u8',
        data(){
            return{
                Sources:'',
                lists:'',
                inputurl:'',
                selected:'http://www.majiabin.com/m3u8/?url=',
                // player:'http://player.809zy.com/m3u8/m3u8.php?url=',
            }
        },
        mounted() {
            this.getM3u8();
            this.GetCollectList();
        },
        methods: {
            GetCollectList() {
                let {CollectLists} = DataList;
                this.Sources = CollectLists
            },
            getM3u8() {
                let {M3u8} = DataList;
                this.lists = M3u8;
            },
            Player() {
                if (this.inputurl == '') {
                    layer.alert('请输入M3U8地址');
                    return;
                }

                layer.full(
                    layer.open({
                        title: false,
                        type: 2,
                        area: ['98%', '98%'],
                        shade: 0.8,
                        content: this.selected + this.inputurl
                    }),
                    layer.msg("关闭按钮在右上角哦！")
                );
                this.inputurl = '';
            },
            login() {
                layer.alert("请登录后查看！")
            },

        }
    }
</script>
<style scoped>
    #app-palyer{
        margin: 200px 0px 100px 0px;
    }
    #app-border{
        border: white solid 0.5px;
        padding: 5px 0px;
        margin:0px 18px 15px 18px;
    }
    #app-border>a{
        color: white;
    }
    p,div{
        color: white;
    }
    #app-tip{
        margin-top: 10px;
        color: red;
    }
</style>