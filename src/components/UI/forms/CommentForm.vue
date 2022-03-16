<template>
  <form class="bg-gray-800 w-full shadow-md rounded px-8 pt-6 pb-8 mb-4 m-2"
  id="app"
  @submit="checkForm"
  method="post"
>
  <h1>Comment Section</h1>
  <label class="text-white block w-1/2 m-auto rounded my-2" for="name">Name</label>
  <input class="text-white block w-1/2 m-auto rounded my-2"
    id="name"
    v-model="name"
    type="text"
    name="name"
    required
  >
  <label class="text-white block w-1/2 m-auto rounded my-2" for="age">Comment</label>
  <input class="text-white block w-1/2 m-auto my-2"
    v-model="comment"
    type="text"
    required
  >
  <input class="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline border-white border-2 m-4"
    type="submit"
    value="Submit"
  >
</form>
<div>
  <p v-for="comment in comments" v-bind="comment.FormComment">{{comment.comment}}</p>
</div>
</template>
<script>
export default {
  data(){
    return{
      name:null,
      FormComment:null,
      comments:[]
    }
  },
  props(){
    ["film"]
  },
  methods:{
    checkForm(e){
      e.preventDefault();
      this.errors = [];
      if (!this.name) {
        this.errors.push('Name required.');
      }
      if (!this.comment) {
        this.errors.push('Age required.');
      }
      console.log(this.comments)
      this.comments.push({
        name:this.name,
        comment:this.comment
      })
    }
  }
}
</script>
