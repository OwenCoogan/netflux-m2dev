<template>
<div v-if="this.film !=null" class="container mx-auto pt-20">
  <div class="grid grid-cols-3 gap-10 flex-row">
    <div>
      <img :src="this.film.image.original"  :alt="this.film.name">
    </div>
    <div class="flex flex-col col-span-2 pt-4">
      <h2 class="text-5xl font-bold pb-14" >{{this.film.name}}</h2>
      <div class="text-left">
        <div class="flex flex-row gap-10">
          <p v-for="genre in this.film.genres" :key="genre.name" class="text-xl py-5">
            {{genre}}
          </p>
        </div>
        <div class="flex flex-row gap-3">
        <p>{{this.episodesinf.season}} seasons</p>
        <span v-if="this.episodesinf.number !=null"> - </span>
        <p v-if="this.episodesinf.number !=null">{{this.episodesinf.number}} episodes </p>
        </div>
        <div>
          <h4 class="text-2xl text-left font-bold py-2.5 pt-6">Summary :</h4>
          {{this.film.summary}}
        </div>
      </div>
    </div>
  </div>
  <CommentForm :film="this.film"/>
  <EpisodeList  :episodes="this.episodes"  />
</div>
</template>
<script>
import EpisodeList from '../components/Episodes/EpisodeList.vue'
import NavBar from '../components/NavBar.vue';
import CommentForm from "../components/UI/forms/CommentForm.vue"
export default {
  components:{
    EpisodeList,
    NavBar,
    CommentForm
  },
  data() {
    return {
      film : null,
      episodes:null,
      episodesinf:null
    }
  },
  mounted () {
    this.getFilm()
  },
  methods:{
    async getFilm(){
      const res = await fetch(`https://api.tvmaze.com/shows/${this.$route.params.id}`);
      const data = await res.json();
      this.film = data;
      this.getEpisodesInfos();
      this.getEpisodes();
    },
    async getEpisodes(){
      const res = await fetch(`https://api.tvmaze.com/shows/${this.$route.params.id}/episodes`);
      const data = await res.json();
      this.episodes = data;
    },
    async getEpisodesInfos(){
      const res = await fetch(`${this.film._links.previousepisode.href}`);
      const data = await res.json();
      this.episodesinf = data;
    }
  },
  setup() {

  },
}
</script>
