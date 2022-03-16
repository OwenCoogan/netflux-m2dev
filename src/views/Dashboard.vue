<template>
<div class="container mx-auto pt-20">
    <Loader v-if="this.loading ===true"/>
    <div v-if="this.loading===false && filmList && !searchResults">
    <RandomEpisodeHeader
        v-if="randomFilm"
        :film='randomFilm'
        v-bind="randomFilm"
    />
      <FilmList v-for="genre in filmList" :filmList="genre" v-bind:key="genre.name" />
    </div>
     <div v-if="this.loading===false && this.searchResults">
       <h1>Search Results</h1>
      <FilmList :filmList="this.searchResults" v-bind:key="searchResults" />
    </div>
</div>

</template>

<script>
import Loader from '../components/Loader.vue';
import FilmList from '../components/Films/FilmList.vue';
import RandomEpisodeHeader from '../components/Films/RandomEpisodeHeader.vue'
import {useMoviesStore} from '../stores/movies';
const movies = useMoviesStore()
export default {
  components:{
    FilmList,
    Loader,
    RandomEpisodeHeader
  },
  data() {
    return {
      filmList : Array,
      randomFilm:null,
      searchResults:movies.ReturnSearchResult,
      loading:true
    }
  },
  mounted () {
      this.getFilms();
      this.scrollDetection();
      movies.$subscribe((mutation) => {
        this.updateFilmList(mutation.payload);
      })
  },
  methods:{
    async getFilms(){
      await movies.getFilms()
      .then( res => this.updateFilmList())
      .then( res => this.randomFilm = movies.films[Math.floor(Math.random() * movies.films.length)])
      .then(this.loading = false)
    },
    scrollDetection () {
      window.onscroll = () => {
        let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight
        if (bottomOfWindow && this.$route.path ==="/") {
        this.loading = true;
        movies.incrementPage()
        setTimeout(() => {
        window.scrollTo(0, 0);
        }, 2000);
        }
      }
    },
    async updateFilmList(){
        console.log()
        this.filmList = [
        movies.films,
        movies.Comedy,
        movies.ScienceFiction,
        movies.Drama,
        ]
    }

  },
  setup() {
  },
}
</script>
