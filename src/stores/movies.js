// src/store/userStore.ts
// Import and use defineStore To define store
import { defineStore } from "pinia";
export const useMoviesStore = defineStore("movies", {
    state: ()=>{
    return {
        movies:null,
        latestMovies:null
    };
    },
    getters: {
    },
    actions: {
        async getMovies(url){
            await fetch(url)
            .then(res => {this.movies = res.data})
            console.log(this.movies)
        }
    },
});