<template>
  <router-link class="bg-white hover:bg-slate-50 text-black font-bold py-2 px-4 rounded m-1" :to="'/show/'+id">
    Read Media
  </router-link>
</template>
<script>
export default {
  props: ['id'],
}
</script>

