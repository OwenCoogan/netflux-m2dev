<template>
  <button class="bg-white text-lg hover:bg-slate-700 bg-opacity-75 text-black font-bold py-2 px-6 rounded m-1" @click="this.addToFavorite()">
    <Loader class="h-10 w-10" v-if="this.loading ===true"/>
    <p v-else>Favorites</p>
  </button>
</template>
<script>
import {useMoviesStore} from '../../stores/movies';
import Loader from '../Loader.vue';
const movies = useMoviesStore();
export default {
  components:{
    Loader
  },
  data(){
    return{
      loading : false
    }
  },
  props: {
    film: {
         type: Object,
         default: (()=>{})
      },
  },
  setup(){
    return movies
  },
  methods:{
    async addToFavorite(){
      this.loading = true
      await movies.addToFavorites(this.film)
      .then(res => this.loading = false)
      .catch(err =>  alert(err));
    }
  }
}
</script>

