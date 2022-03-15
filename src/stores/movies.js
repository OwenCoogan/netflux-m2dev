import { defineStore } from 'pinia'
let fallbackUrl = 'https://api.tvmaze.com/shows?page=1'

export const useMoviesStore = defineStore({
  id: 'movies',
  state: () => ({
    searchIndex:2,
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
    $subscribe(state){
      return state
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
      const res = await fetch( url ? url : fallbackUrl );
      const data = await res.json();
      this.films = this.sortFilms(data);
    },
    async searchForFilm(query){
      const res = await fetch( 'https://api.tvmaze.com/search/shows?q='+query);
      const data = await res.json();
      this.searchedfilms = data;
    },
  },
  getters:{
    ReturnSearchResults() {
      return this.searchedfilms
    }
  }
})
