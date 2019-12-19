<template>
  <div id="app">
    <AppHeader/>
    <div id="app-content">
      <router-view/>
    </div>
    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from './components/Header';
import AppFooter from './components/Footer';

export default {
  name: 'app',
  data(){
    return {
        title:"OrangBus在线解析"
    }
  },
  components:{
    AppHeader,
    AppFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  #app-content {
    margin-top:70px;
  }
</style>
