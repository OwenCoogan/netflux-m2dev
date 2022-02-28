<template>
      <article class="flex mx-24 my-24">
        <img :src="image" class="w-1/3"/>
        <div class="w-2/3">
        <h2>Episode Name : {{title}}</h2>
        </div>
      </article>
</template>
<script>
export default {
  props: ['title','image','id'],
}
</script>

