<script>
import AppProjectHome from './components/AppProjectHome.vue';
import AppProjectHeader from './components/AppProjectHeader.vue';



export default {
  
  data() {
    return {
    };
  },
  components: {
    AppProjectHome,
    AppProjectHeader
  }
};
</script>

<template>
  <header>
    <AppProjectHeader/>
  </header>
  <main>
    <AppProjectHome/>
  </main>
</template>

<style></style>
