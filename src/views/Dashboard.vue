<template>
<div class="container mx-auto">
    <div v-if="loading===false">
      <RandomEpisodeHeader
          v-if="randomFilm"
          :title='randomFilm.name'
          :image='randomFilm.image?.original'
          :id='randomFilm.id'
      />
      <FilmList v-for="genre in filmList" :filmList="genre" v-bind:key="genre.name" />
    </div>
</div>

</template>

<script>
import FilmList from '../components/Films/FilmList.vue';
import NavBar from '../components/NavBar.vue';
import RandomEpisodeHeader from '../components/Films/RandomEpisodeHeader.vue'
import {useMoviesStore} from '../stores/movies';
const movies = useMoviesStore()
export default {
  components:{
    FilmList,
    NavBar,
    RandomEpisodeHeader
  },
  data() {
    return {
      filmList : Array,
      randomFilm:null,
      searchResults:null,
      loading:true
    }
  },
  mounted () {
      this.getFilms();
  },
  methods:{
    async getFilms(){
      await movies.getFilms()
      .then( res => this.filmList = [
        movies.films,
        movies.Comedy,
        movies.ScienceFiction
      ])
      .then( res => this.randomFilm = movies.films[Math.floor(Math.random() * movies.films.length)])
      .then(this.loading = false)
    }
  },
  setup() {
  },
}
</script>
