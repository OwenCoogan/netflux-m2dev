<template>
    <router-link :to="'/show/'+id">
      <article @mouseover="this.displayedInfo = true" @mouseleave="this.displayedInfo = false" class="bg-cover bg-no-repeat bg-white rounded-lg border-gray-200" v-bind:style="{'min-height': '255px' , 'background-image': 'url(' + image + ')' }">
        <div v-if="this.displayedInfo ===true" class="bg-black h-28">
          <h2 class="font-sans text-lg font-bol rounded-t-lg py-1.5">{{title}}</h2>
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

