<template>
    <nav class="navbar navbar-expand-lg  bg-dark" style="margin-top:35px;">
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
        name : 'AppFooter',
        data() {
            return {
                name : "orangbus" ,
                content : "保持勇敢，坚持有趣!"
            }
        },
        created() {
            this.getwords();
        },
        methods:{
            getwords(){
                this.axios.get("https://international.v1.hitokoto.cn").then((res) => {
                    this.name = res.data.creator;
                    this.content = res.data.hitokoto;
                });
            }

        }
    }
</script>


<style scoped>

</style>
