<template>
    <router-link :to="'/show/'+id" class="mx-16">
      <article
        @mouseover="this.displayedInfo = true"
        @mouseleave="this.displayedInfo = false"
        class="bg-cover relative bg-no-repeat bg-white rounded-lg border-gray-200 w-3/4 h/3/4 hover:w-full hover:h-full m-auto"
        v-bind:style="{'min-height': '255px' , 'background-image': 'url(' + image + ')' }"
      >
        <div
        v-if="this.displayedInfo ===true" class="bg-red-700 h-14 absolute w-full bottom-0 left-0 text-center rounded-b-lg">
          <h2 class="font-sans text-xl font-bol  py-3">{{title}}</h2>
          <div class="flex">
            <!--  Button List -->
        </div>
        </div>
      </article>
    </router-link>
</template>
<script>
export default {
  props: ['title','image','id','seasons'],
  data() {
    return {
      displayedInfo:false
    }
  },
}
</script>

