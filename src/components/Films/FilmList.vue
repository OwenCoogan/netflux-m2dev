<template>
  <section>
      <div v-for="film in filmList" :key="film.ame">
      <FilmCard
      :title='film.name'
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

