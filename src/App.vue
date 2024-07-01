<script>
import ProjectHomePage from './style/pages/ProjectHomePage.vue';
import AppProjectHeader from './components/AppProjectHeader.vue';



export default {
  
  data() {
    return {
    };
  },
  components: {
    ProjectHomePage,
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
