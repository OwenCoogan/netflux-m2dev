<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
<div class="bg-black">
  <FilmList/>
</div>
</template>
<script>
import FilmList from '../components/Films/FilmList.vue'
export default {
  components:{
    FilmList
  },
  setup() {

  },
}
</script>
