<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
<div v-if="this.film !=null">
  <h2>{{this.film.name}}</h2>
  <img :src="this.film.image.original" :alt="this.film.name">
</div>
</template>
<script>
export default {
  components:{
  },
  data() {
    return {
      film : null,
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
      console.log(this.film)
    }
  },
  setup() {

  },
}
</script>
