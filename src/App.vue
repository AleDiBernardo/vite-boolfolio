<script>
import HomePage from './style/pages/HomePage.vue';
import AppProjectHeader from './components/AppProjectHeader.vue';



export default {
  
  data() {
    return {
    };
  },
  components: {
    HomePage,
    AppProjectHeader
  }
};
</script>

<template>
  <header>
    <AppProjectHeader/>
  </header>
  <main class="pt-5">
    <router-view></router-view>
  </main>
</template>

<style>

</style>
