<template>
  <section>
      <div v-for="episode in episodes" :key="episode.name" class="w-1/6">
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

