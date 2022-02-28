<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
<div class="bg-black">
  <FilmList :filmList="filmList" />
</div>
</template>
<script>
import FilmList from '../components/Films/FilmList.vue'
export default {
  components:{
    FilmList
  },
  data() {
    return {
      filmList : null,
    }
  },
  mounted () {
      this.getFilms();
  },
  methods:{
    async getFilms(){
      const res = await fetch('https://api.tvmaze.com/shows?page=1');
      const data = await res.json();
      this.filmList = data;
      console.log(this.filmList);
    }
  },
  setup() {

  },
}
</script>
