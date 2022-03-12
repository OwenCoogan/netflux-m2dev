import { defineStore } from 'pinia'
const fallbackUrl = 'https://api.tvmaze.com/shows?page=1'
export const useMoviesStore = defineStore({
  id: 'movies',
  state: () => ({
    films: null,
    searchedfilms:null,
    favorites:null
  }),
  actions:{
    async getFilms(url){
      const res = await fetch( url ? url : fallbackUrl );
      const data = await res.json();
      this.films = data;
    },
    async searchForFilm(query){
      const res = await fetch( 'https://api.tvmaze.com/search/shows?q='+query );
      const data = await res.json();
      this.searchedfilms = data;
      console.log(this.searchedfilms)
    }
  },
})
