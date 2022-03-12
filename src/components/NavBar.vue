<template>
<nav class="bg-black z-50 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 fixed w-full">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
    <a href="/" class="flex items-center">
    <span class="logo self-center text-xl font-semibold whitespace-nowrap dark:text-white">Netflux</span>
    </a>
    <div class="flex md:order-2">
    <div class="hidden relative mr-3 md:mr-0 md:block">
    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">

    <li>
      <a href="#" class="block py-2 pr-4 pl-3" aria-current="page">Home</a>
    </li>
    </div>
    <input
    type="text" id="email-adress-icon" class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." v-model="searchResult"
        @change="getSearchResult">
    </div>
    </div>
    </div>
</nav>
</template>
<script>
export default {
  components:{

  },
  data() {
    return {
      searchResult:null,
    }
  },
  mounted () {
  },
  methods:{
    async searchForFilm(query){
      await movies.searchForFilm(query)
    }
  },
  setup() {

  },
}
</script>

