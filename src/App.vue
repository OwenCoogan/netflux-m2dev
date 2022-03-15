<template>
  <NavBar />
  <router-view/>
</template>

<script>
import NavBar from './components/NavBar.vue';
export default {
  components:{
    NavBar
  },
  setup() {
  },
}
</script>

<style>
html {
  background-color:#000000;
  text-align: center;
  color:white;
}
</style>
