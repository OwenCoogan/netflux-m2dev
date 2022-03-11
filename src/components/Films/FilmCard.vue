<template>
    <router-link :to="'/media/'+id">
      <article class="bg-cover bg-no-repeat bg-white rounded-lg border-gray-200" v-bind:style="{'min-height': '255px' , 'background-image': 'url(' + image + ')' }">
        <h2 class="font-sans text-lg font-bold bg-red-600 rounded-t-lg py-1.5">{{title}}</h2>
      </article>
    </router-link>
</template>
<script>
export default {
  props: ['title','image','id'],
}
</script>

