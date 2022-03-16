<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
<div v-if="this.episode !=null" class="container mx-auto pt-20">
  <div class="grid grid-cols-3 gap-10 flex-row">
    <div>
      <img :src="this.episode.image.original" :style="{'height': '30vh'}" :alt="this.episode.name">
    </div>
    <div class="flex flex-col col-span-2 pt-4">
      <h2 class="text-5xl font-bold pb-14" >{{this.episode.name}}</h2>
      <div class="text-left">
        <p>
          Episode : {{this.episode.number}}  / Season : {{this.episode.season}}
        </p>
        <div>
          <h4 class="text-2xl text-left font-bold py-2.5 pt-6">Summary :</h4>
          {{this.episode.summary}}
        </div>
      </div>
    </div>
  </div>
  <!--<EpisodeList  :episodes="this.episodes"  />-->
</div>
</template>
<script>
import EpisodeList from '../components/Episodes/EpisodeList.vue'
import NavBar from '../components/NavBar.vue';
import { parseText } from '../utilities/parser'
export default {
  components:{
    EpisodeList,
    NavBar
  },
  data() {
    return {
      episode : null,
      episodes:null,
    }
  },
  mounted () {
    this.getEpisodes()
  },
  methods:{
    parseText(text){
      parseText(text)
    },
    async getEpisodes(){
      const res = await fetch(`https://api.tvmaze.com/shows/${this.$route.params.id}/episodes`);
      const data = await res.json();
      this.episodes = data;
        data.forEach(episodes => {
            if (episodes.id == this.$route.params.id_episode){
                this.episode = episodes;
            }

        });
    }
  },
  setup() {

  },
}
</script>
