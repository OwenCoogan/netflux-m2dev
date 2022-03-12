<template>
  <a class="bg-white hover:bg-slate-700 bg-opacity-75 text-black font-bold py-2 px-4 rounded m-1" :href="`https://www.youtube.com/results?search_query=${title}`">
    Lecture
  </a>
</template>
<script>
export default {
  props: ['title'],
}
</script>

