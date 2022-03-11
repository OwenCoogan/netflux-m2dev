<template>
    <router-link :to="'/show/'+this.$route.params.id+'/episode/'+id">
      <article class="bg-cover bg-no-repeat bg-white rounded-lg border-gray-200"
      v-bind:style="{'min-height': '155px' , 'background-image': 'url(' + image + ')' }">
        <h4 class="font-sans text-sm text-center font-bold bg-red-600 rounded-t-lg py-1.5">
          {{title}}
        </h4>
      </article>
    </router-link>
</template>
<script>
export default {
  props: ['title','image','id'],
}
</script>

