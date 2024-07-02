<template>
   <div class="container mt-3 mb-3">
      <div class="row g-4 row-cols-lg-4 row-cols-md-3 row-cols-1">
        <div class="col" v-for="(project, index) in projects" :key="index">
          <router-link :to="{name: 'singleproject', params: {slug: project.slug}}" class="text-decoration-none">
            <ProjectCard :project="project" />
          </router-link>
        </div>
      </div>
      <AppProjectPagination
        :currentPage="currentPage"
        :totalPages="totalPages"
        @changePage="fetchData"
      />
    </div>
</template>


<script>
import axios from "axios";
import ProjectCard from '../../components/ProjectCard.vue';
import AppProjectPagination from '../../components/AppProjectPagination.vue';

export default {
  data() {
    return {
      projects: [],
      currentPage: 1,
      totalPages: 1,
      baseImageUrl: 'http://127.0.0.1:8000/storage'
    };
  },
  created() {
    this.fetchData(this.currentPage);
  },
  methods: {
    async fetchData(page) {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/projects?page=${page}`);
        this.projects = response.data.results.data;
        this.currentPage = response.data.results.current_page;
        this.totalPages = response.data.results.last_page;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  },
  components: {
    ProjectCard,
    AppProjectPagination
  }
};
</script>


<style>

</style>