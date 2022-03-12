<template>
<nav class="bg-black z-50 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 fixed w-full">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
    <a href="#" class="flex items-center">
    <img class="mr-3 h-6 sm:h-10" alt="Netflux Logo" />
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Netflux</span>
    </a>
    <div class="flex md:order-2">
    <div class="hidden relative mr-3 md:mr-0 md:block">
    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
    <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
    </div>
    <input
    type="text" id="email-adress-icon" class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." v-model="searchResult"
        @change="getSearchResult">
    </div>
    </div>
        <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-3">
        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        <li>
        <a href="#" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
        </li>
        </ul>
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

