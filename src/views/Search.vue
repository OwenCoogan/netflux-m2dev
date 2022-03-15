<template>
<div class="container mx-auto">
  <h1>Search Results</h1>
  <h2 v-if="filmList ===null">No results :(</h2>
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
