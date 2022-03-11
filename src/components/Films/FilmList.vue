<template>
  <section class="grid grid-cols-5 gap-4">
      <div v-for="film in filmList" :key="film.name" >
      <FilmCard
      :title='film.name'
      :image='film.image?.medium'
      :id='film.id'
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

