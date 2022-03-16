import { defineStore } from 'pinia'


export const useMoviesStore = defineStore({
  id: 'movies',
  state: () => ({
    searchIndex:1,
    films: Array,
    Comedy: Array,
    ScienceFiction:Array,
    Drama: Array,
    searchedfilms:null,
    favorites:null
  }),
  actions:{
    incrementPage(){
      this.searchIndex++
      this.getFilms(`https://api.tvmaze.com/shows?page=${this.searchIndex}`)
    },

    sortFilms(films){
      const sortedFilms = [];
      const Comedy = [];
      const ScienceFiction = [];
      const Drama = [];

      films.forEach(film => {
          switch (film.genres[0]) {
            case "Comedy":
              Comedy.push(film);
              break;
            case "Science-Fiction":
              ScienceFiction.push(film);
              break;
            case "Drama":
              Drama.push(film);
              break;
            default:
              sortedFilms.push(film)
          }
      });
      this.$patch({
        films : sortedFilms,
        Comedy : Comedy,
        ScienceFiction : ScienceFiction,
        Drama:Drama
      })
      return this.films,this.Comedy,this.ScienceFiction,this.Drama
    },
    async getFilms(url){
      const res = await fetch( url ? url : 'https://api.tvmaze.com/shows?page=1' );
      const data = await res.json();
      this.films = this.sortFilms(data);
    },
    async searchForFilm(query){
      const res = await fetch( 'https://api.tvmaze.com/search/shows?q='+query);
      const data = await res.json();
      this.searchedfilms = [data];
      return this.searchedfilms
    },
    async addToFavorites(film){
      this.$patch({
        favorites:film
      })
      return this.favorites
    },
  },
  getters:{
    ReturnSearchResults() {
      return this.searchedfilms
    }
  }
})
