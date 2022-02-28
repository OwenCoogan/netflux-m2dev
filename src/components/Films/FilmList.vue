<template>
  <section>
      <div v-for="film in filmList" :key="film.name" class="w-1/6">
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

