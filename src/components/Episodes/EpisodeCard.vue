<template>
      <article>
        <h2>Episode Name : {{title}}</h2>
        <img :src="image"/>
      </article>
</template>
<script>
export default {
  props: ['title','image','id'],
}
</script>

