<template>
    <div class="container" id="case1">
        <div class="row">
            <div class="col-md-6">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <select class="input-group-text"  v-model="selected">
                            <option
                                    v-for="list in lists"
                                    :key="list.value"
                                    :value="list.value"
                            >
                                {{ list.name }}
                            </option>
                        </select>
                    </div>
                    <input v-model="words" @blur="Search()" type="text" class="form-control" placeholder="请输入电影名。随便点击空白处搜索">
                    <div class="input-group-append">
                        <span class="input-group-text" @click="ClearKeyWord">清除关键词<span style="color: red">{{words.substring(0,4)}}</span></span>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" @click="ClearUrl">清除URL</span>
                    </div>
                    <input v-model="playurl" @blur="PlayVideo()" type="text" class="form-control" placeholder="请输入视频Url地址，点击空白区域播放">
                    <div class="input-group-append">
                        <select class="input-group-text"  @change="ChangePreUrl" v-model="preurl">
                            <option
                                    v-for="item in vips"
                                    :key="item.url"
                                    :value="item.url"
                            >
                                {{  item.name }}
                            </option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" v-show="isplay == true">
            <div class="col-md-12" style="padding: 0px">
                <iframe v-bind:src="videourl" frameborder="0" id="case3"></iframe>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12" style="padding: 0px">
                <iframe v-bind:src="url" frameborder="0" id="case3"></iframe>
            </div>
        </div>
        <!--使用教程-->
        <div class="row" style="border-radius: 15px;background-color: white;margin-top:10px">
            <div class="col-md-12">
                <div class="text-center">
                    <h2 style="margin-top:5px">vip解析使用教程</h2>
                    <hr style="width: 90%;">
                </div>
            </div>
            <div class="col-md-4">
                <a href="#" data-toggle="tooltip" title="点击图片观看视频教程!" @click="PcDemo">
                    <img src="/images/orangbus.png" alt="" style="width: 180px;height: 180px;">
<!--                    <p><a  @click="PcDemo">Pc演示</a> | <a  @click="MobDemo">手机演示</a></p>-->
                </a>
            </div>
            <div class="col-md-8 text-left">
                <p style="color: red">解析线路来自网络收集,如有侵权请及时联系站长删除</p>
                <p>1、左侧输入框输入关键词，点击空白即可搜索</p>
                <p>2、在搜索结果中，右键复制视频地址</p>
                <p>3、右侧输入框粘贴刚刚复制的视频地址，随意点击空白区域即可观看</p>
                <p>4、不能播放请尝试其他线路，我们支持的平台有</p>
            </div>
        </div>
        <!--支持平台-->
        <div class="row" style="border-radius: 15px;background-color: white;margin-top:10px">
            <div class="col-md-12">
                <img src="/images/tenxun.png" alt="" class="img-fluid">
                <img src="/images/youku.png" alt="" class="img-fluid">
                <img src="/images/iqiyi.png" alt="" class="img-fluid">
                <img src="/images/mg.png" alt="" class="img-fluid">
                <img src="/images/sohu.png" alt="" class="img-fluid">
                <img src="/images/leshi.png" alt="" class="img-fluid">
            </div>
        </div>
    </div>
</template>
<script>
    import layer from "layui-layer";
    import DataList from "../data";
    export default {
        name: "Show",
        data(){
            return {
                url: "https://v.qq.com/zhuiju/?type=3",
                wapurl: "https://m.v.qq.com/index.html",
                playurl: "",
                words: "",
                inputurl : "",
                selected: "https://v.qq.com/x/search/?q=",
                preurl : "https://api.sigujx.com/jx/?url=",
                lists : "",
                vips :"",
                videourl:"",
                isplay:false,
            }
        },
        mounted(){
            this.getData();
        },
        methods : {
            Demo:function(){
                // eslint-disable-next-line no-console
              // console.log(this.lists)
                // eslint-disable-next-line no-console
                console.log(this.selected)
            },
            Search : function() {
                let that = this;
                let words = that.words;
                if (words.length == "") {
                    layer.open({
                        title:"提示！",
                        icon: 1,
                        content:'请输入你的关键词！',
                        time: 2000
                    });
                    return false;
                }
                let searchWord = that.selected + words;
                that.url = searchWord;
                that.isplay = false;
            },
            //清除搜索关键词
            ClearKeyWord:function () {
                const that = this;
                that.words ="";
                layer.msg("关键词清除成功！");
                return false;
            },
            //播放视频
            PlayVideo : function () {
                const that = this;
                if (that.playurl == ""){
                    layer.open({
                        title:"提示！",
                        icon: 1,
                        content:'请复制视频URL到此处才能观看！',
                        time: 2000
                    });
                    return false;
                }
                that.videourl = that.preurl + that.playurl;
                that.isplay = true;
                layer.msg("解析成功，祝你观赏愉快！")
            },
            //清除视频URL地址
            ClearUrl:function () {
                const that = this;
                that.playurl = "";
                layer.msg("URL清除成功")
            },
            ChangePreUrl: function () {
                const that = this;
                if (that.playurl == ""){
                    return false;
                }else{
                    this.videourl = that.preurl + that.playurl;
                   layer.msg("成功切换！")
                }
            },
            PcDemo(){
                layer.open({
                    type: 2,
                    title: false,
                    area: ['630px', '360px'],
                    shade: 0.8,
                    closeBtn: 0,
                    shadeClose: true,
                    content: '//player.youku.com/embed/XMjY3MzgzODg0'
                });
            },
            getData(){
                let {lists , vips} = DataList;
                this.lists = lists;
                this.vips = vips;
                // eslint-disable-next-line no-console
                // console.log(this.lists)
            }
        }
    }
</script>

<style scoped>
    #case1{
        margin-top:70px;
    }
    #app-ifrome{
        margin-top:0px;
    }
    #case3{
        width: 100%;
        height: 800px;
        border-radius: 10px;
    }
</style>
