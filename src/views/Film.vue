<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
<div v-if="this.film !=null" class="container mx-auto">
  <NavBar />
  <div class="grid grid-cols-3 gap-10 flex flex-row">
    <div>
      <img :src="this.film.image.original" :alt="this.film.name">
    </div>
    <div class="flex flex-col col-span-2">  
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
          <h4 class="text-2xl py-5 text-left font-bold py-1.5">Summary :</h4>
          {{this.film.summary}} 
        </div>
      </div>
    </div>
  </div>
  <EpisodeList  :episodes="this.episodes"  />
</div>
</template>
<script>
import EpisodeList from '../components/Episodes/EpisodeList.vue'
import NavBar from '../components/NavBar.vue';
export default {
  components:{
    EpisodeList,
    NavBar
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
      console.log(this.episodes)
    },
    async getEpisodesInfos(){
      const res = await fetch(`${this.film._links.previousepisode.href}`);
      const data = await res.json();
      this.episodesinf = data;
      console.log(this.episodesinf)
    }
  },
  setup() {

  },
}
</script>
