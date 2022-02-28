<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
<div>
  <FilmList :filmList="filmList" />
</div>
</template>
<script>
import FilmList from '../components/Films/FilmList.vue';
import {useMoviesStore} from '../stores/movies';
const movies = useMoviesStore()
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
      await movies.getFilms()
      .then(response => this.filmList = movies.films)
    }
  },
  setup() {

  },
}
</script>
