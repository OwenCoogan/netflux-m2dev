<template>
      <article class="relative bg-center bg-auto bg-no-repeat bg-black rounded-lg border-gray-200" v-bind:style="{'min-height': '255px' , 'height':'90vh', 'background-image': 'url(' + film.image.original + ')' }">
        <div class="absolute left-10 bottom-20 w-1/3 max-h-max text-left ">
          <h2 class="font-sans text-7xl font-bold rounded-t-lg py-1.5 m-8">{{film.name}}</h2>
          <div class="flex">
            <ReadButton
            class="min-width--button"
              :title="film.name"
            />
            <InfoButton
            class="min-width--button"
            :id="film.id"/>
            <AddToFavorites
            class="min-width--button"
            :film="film"/>
          </div>
        </div>
      </article>
</template>
<script>
import InfoButton from '../UI/InfoLink.vue'
import ReadButton from '../UI/ReadLink.vue'
import AddToFavorites from '../UI/AddToFavorites.vue'
export default {
  components:{
    InfoButton,
    ReadButton,
    AddToFavorites
  },
  props: ['film'],
}
</script>

