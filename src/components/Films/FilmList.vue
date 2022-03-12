<template>
  <section v-if="this.$route.name!='Search'" class="grid grid-cols-7 gap-4">
      <div v-for="film in filmList" :key="film.name" >
      <FilmCard
      :title='film.name'
      :image='film.image?.medium'
      :id='film.id'
      />
    </div>
  </section>
  <section v-else class="grid grid-cols-7 gap-4">
    <div v-for="film in filmList" :key="film.show.name" >
      <FilmCard
      :title='film.show.name'
      :image='film.show.image?.medium'
      :id='film.show.id'
      :seasons='film.show.season'
      />
    </div>
  </section>
</template>
<script>
import  FilmCard from '../Films/FilmCard.vue'
export default {
  props:{
    filmList: Array
  },
  components:{
    FilmCard
  },
}
</script>

