<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
<div class="container mx-auto">
  <NavBar />
  <FilmList :filmList="filmList" />
</div>
</template>
<script>
import NavBar from '../components/NavBar.vue';
import FilmList from '../components/Films/FilmList.vue';
export default {
  components:{
    FilmList,
    NavBar
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
      const res = await fetch(`https://api.tvmaze.com/search/shows?q=${this.$route.params.query}`);
      const data = await res.json();
      this.filmList = data;
    }
  },
  setup() {

  },
}
</script>
