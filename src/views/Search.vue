<template>
<div class="container mx-auto pt-28">
  <h1 class="text-4xl font-bold pb-6">Search Results</h1>
  <h2 class="text-4xl font-bold pt-28" v-if="filmList===null || filmList.length===0">No results :(</h2>
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
      this.getSearchResult();
  },
  methods:{
    async getSearchResult(){
      const res = await fetch(`https://api.tvmaze.com/search/shows?q=${this.$route.params.query}`);
      const data = await res.json();
      this.filmList = data;
      console.log(this.filmList)
    }
  },
  setup() {

  },
}
</script>
