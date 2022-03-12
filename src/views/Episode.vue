<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
<div v-if="this.episode !=null" class="container mx-auto">
  <div class="grid gap-10 flex flex-col justify-items-center">
    <div>
      <img :src="this.episode.image.original" :alt="this.episode.name">
    </div>
    <div class="flex flex-col">
      <h2 class="text-5xl font-bold pb-14" >{{this.episode.name}}</h2>
      <div class="text-left">
        <p>
          Episode : {{this.episode.number}}  / Season : {{this.episode.season}}
        </p>
        <div class="pb-14">
          <h4 class="text-2xl py-5 text-left font-bold py-1.5">Summary :</h4>
          {{parseText(this.episode.summary)}}
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import NavBar from '../components/NavBar.vue';
import { parseText } from '../utilities/parser'
export default {
  components:{
    NavBar
  },
  data() {
    return {
      episode : null
    }
  },
  mounted () {
    this.getEpisodes()
  },
  methods:{
    parseText(){
      parseText()
    },
    async getEpisodes(){
      const res = await fetch(`https://api.tvmaze.com/shows/${this.$route.params.id}/episodes`);
      const data = await res.json();
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
