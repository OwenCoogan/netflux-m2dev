<template>
  <section>
    <artcle class="film-card">
      <FilmCard/>
    </artcle>
  </section>
</template>
<script>
import  FilmCard from '../Films/FilmCard.vue'
export default {
  props: ['title', 'message'],
  components:{
    FilmCard
  },
}
</script>

