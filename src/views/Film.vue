<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
<div v-if="this.film !=null">

  <h2>{{this.film.name}}</h2>
  <img :src="this.film.image.medium" :alt="this.film.name">
  <p>{{this.film.summary}}</p>
  <EpisodeList
  :episodes="this.episodes"
  />
</div>
</template>
<script>
import EpisodeList from '../components/Episodes/EpisodeList.vue'
export default {
  components:{
    EpisodeList
  },
  data() {
    return {
      film : null,
      episodes:null
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
      this.getEpisodes();
    },
    async getEpisodes(){
      const res = await fetch(`https://api.tvmaze.com/shows/${this.$route.params.id}/episodes`);
      const data = await res.json();
      this.episodes = data;
      console.log(this.episodes)
    }
  },
  setup() {

  },
}
</script>
