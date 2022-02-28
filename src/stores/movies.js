import { defineStore } from 'pinia'
export const useMoviesStore = defineStore({
  id: 'movies',
  state: () => ({
    films: null,
  }),
  actions:{
    async getFilms(url){
      const fallbackUrl = 'https://api.tvmaze.com/shows?page=1'
      const res = await fetch( url ? url : fallbackUrl );
      const data = await res.json();
      this.films = data;
    }
  }
})
