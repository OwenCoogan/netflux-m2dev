<template>
<nav class="bg-black z-50 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 fixed w-full">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
    <a href="/" class="flex items-center">
    <span class="logo self-center text-xl font-semibold whitespace-nowrap dark:text-white">Netflux</span>
    </a>
    <div class="flex md:order-2">
    <div class="hidden relative mr-3 md:mr-0 md:block">
    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
    </div>
    <input
    type="text" id="email-adress-icon" class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." v-model="query"
        @keyup="this.searchForFilms(query)">
    </div>
    </div>
    </div>
      <div v-if="this.loading===true" class="h-screen">
    <Loader class="h-screen"/>
      </div>
</nav>
</template>
<script>
import Loader from '../components/Loader.vue';
import {useMoviesStore} from '../stores/movies';

export default {
  components:{
    Loader
  },
  data() {
    return {
      query:null,
      loading:false
    }
  },
  setup() {
    const movies = useMoviesStore();
    return movies
  },
  mounted () {
  },
  methods:{
    async searchForFilms(query){
      this.loading = true
      if (!this.awaitingSearch) {
          setTimeout(() => {
            this.awaitingSearch = false;
            this.$router.push({path: `/search/${query}`});
            this.loading = false
          }, 1);
        }
      this.awaitingSearch = true;
    },
  },
}
</script>

