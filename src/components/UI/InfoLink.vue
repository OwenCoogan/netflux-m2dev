<template>
  <router-link class="bg-gray-500 hover:bg-gray-700 bg-opacity-75 text-white font-bold py-2 px-4 rounded m-1" text-lg :to="'/show/'+id">
    More Info
  </router-link>
</template>
<script>
export default {
  props: ['id'],
}
</script>

