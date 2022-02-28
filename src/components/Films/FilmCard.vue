<template>
    <router-link :to="'/media/'+id">
      <article class="bg-cover bg-no-repeat h-auto p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" v-bind:style="{ 'background-image': 'url(' + image + ')' }">
        <h2>{{title}}</h2>
      </article>
    </router-link>
</template>
<script>
export default {
  props: ['title','image','id'],
}
</script>

