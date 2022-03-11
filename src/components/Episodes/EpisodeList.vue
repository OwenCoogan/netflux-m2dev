<template>
  <h3 class="text-3xl pt-14 text-left font-bold py-1.5">Episodes :</h3>
  <section class="grid grid-cols-5 gap-3 py-10">
      <div v-for="episode in episodes" :key="episode.name">
      <EpisodeCard
      :title='episode.name'
      :image='episode.image?.medium'
      :id='episode.id'
      />
    </div>

  </section>
</template>
<script>
import  EpisodeCard from '../Episodes/EpisodeCard.vue'
export default {
  props:{
    episodes: Array
  },
  components:{
    EpisodeCard
  },
}
</script>

