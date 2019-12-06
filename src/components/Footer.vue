<template>
    <nav class="navbar navbar-expand-lg  bg-dark" style="margin-top:15px;">
        <div class="container" style="color: white">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h3>
                        {{ content }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span class="text-right">---{{ name }}</span>
                    </h3>
                </div>
            </div>
        </div>
    </nav>

</template>

<script>
    export default {
        name : 'Footer',
        data() {
            return {
                name : "orangbus" ,
                content : "保持勇敢，坚持有趣!"
            }
        },
        created() {
            const that = this;
            this.axios.get("https://international.v1.hitokoto.cn").then((res) => {
                that.name = res.data.creator;
                that.content = res.data.hitokoto;
            });
            // layer.alert("Welcome to v.orangbus.cn");
        },
        methods: {
            getWord(){
                const that = this;
                this.axios.get("https://international.v1.hitokoto.cn").then((res) => {
                    that.name = res.data.creator;
                    that.content = res.data.hitokoto;
                });
            }
        }
    }
</script>


<style scoped>

</style>
