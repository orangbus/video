<template>
    <div>
        <nav class="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
            <!-- Brand -->
            <img src="/images/orangbus.png" alt="" style="width: 30px;height: 30px;">&nbsp;&nbsp;
            <a class="navbar-brand" href="/">OrangBus</a>

            <!-- Toggler/collapsibe Button -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Navbar links -->
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="https://orangbus.cn" target="_blank">淘宝券</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://img.orangbus.cn" target="_blank">壁纸站</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://orangbus.github.io" target="_blank">个人笔记</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://github.com/orangbus" target="_blank">Github</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://jq.qq.com/?_wv=1027&k=5C1SYan" target="_blank">开车群</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>

</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>