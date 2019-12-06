<template>
  <div id="app">
    <VideoHeader></VideoHeader>
    <VideoContent></VideoContent>
    <VideoFooter></VideoFooter>
  </div>
</template>

<script>
import VideoHeader from './components/Header';
import VideoContent from './components/Content';
import VideoFooter from './components/Footer';

export default {
  name: 'app',
  data(){
    return {
        title:"OrangBus在线解析"
    }
  },
  components:{
    VideoHeader,
    VideoContent,
    VideoFooter
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
</style>
