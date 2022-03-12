<template>
      <article class="relative bg-contain bg-no-repeat h-screen bg-white rounded-lg border-gray-200" v-bind:style="{'min-height': '255px' , 'background': 'url(' + image + ') no-repeat center' }">
        <div class="absolute left-10 bottom-20 w-1/3 max-h-max text-left ">
          <h2 class="font-sans text-lg font-bold rounded-t-lg py-1.5 m-8">{{title}}</h2>
          <div class="flex">
            <ReadButton
              :title="title"
            />
            <InfoButton :id="id"/>
          </div>
        </div>
      </article>
</template>
<script>
import InfoButton from '../UI/InfoLink.vue'
import ReadButton from '../UI/ReadLink.vue'
export default {
  components:{
    InfoButton,
    ReadButton
  },
  props: ['title','image','id'],
}
</script>

