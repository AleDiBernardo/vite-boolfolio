<script>
import axios from "axios";
import ProjectCard from './components/ProjectCard.vue';

export default {
  
  data() {
    return {
      projects: [],
      baseImageUrl: 'http://127.0.0.1:8000/storage'
    };
  },
  created() {
    axios.get("http://127.0.0.1:8000/api/projects").then((resp) => {
      this.projects = resp.data.results.data;
      console.log(this.projects);
    });
  },
  components: {
    ProjectCard
  }
};
</script>

<template>
  <div class="container mt-3">
    <div class="row g-4 row-cols-lg-4">
      <div class="col" v-for="(project,index) in projects" :key="index">
        <ProjectCard :project="project" />
        
      </div>
    </div>
  </div>
</template>

<style></style>
