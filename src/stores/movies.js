import { defineStore } from 'pinia'


export const useMoviesStore = defineStore({
  id: 'movies',
  state: () => ({
    searchIndex:1,
    films: Array,
    Comedy: Array,
    ScienceFiction:Array,
    Drama: Array,
    searchedfilms:Array,
    favorites:Array
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
      films.forEach(film => {
        film.genres.forEach(genre => {
          switch (genre) {
            case "Comedy":
              Comedy.push(film)
              break;
            case "Science-Fiction":
              ScienceFiction.push(film)
              break;
            default:
              sortedFilms.push(film)
          }
        });
      });
      this.films = sortedFilms
      this.Comedy = Comedy
      this.ScienceFiction = ScienceFiction
      return this.films,this.Comedy,this.ScienceFiction
    },
    async getFilms(url){
      const res = await fetch( url ? url : 'https://api.tvmaze.com/shows?page=1' );
      const data = await res.json();
      this.films = this.sortFilms(data);
    },
    async searchForFilm(query){
      const res = await fetch( 'https://api.tvmaze.com/search/shows?q='+query);
      const data = await res.json();
      this.searchedfilms = data;
      return this.searchedfilms
    },
    async addToFavorites(film){
      this.favorites.push(film)
      return this.favorites
    },
  },
  getters:{
    ReturnSearchResults() {
      return this.searchedfilms
    }
  }
})
