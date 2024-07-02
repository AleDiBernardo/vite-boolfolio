<template>
  <div class="container mt-5 text-white">
    <h1 class="text-center mt-5">{{ project.title }}</h1>
    <div class="container mt-5 d-flex flex-wrap justify-content-center">
      <div class="col-lg-8 col-md-10 mb-4">
        <div class="card bg-dark">
          <div class="card-body">
            <p class="card-text fs-5">
              <strong>Descrizione:</strong> {{ project.description }}
            </p>
            <p class="card-text fs-5"><strong>Slug:</strong> {{ project.slug }}</p>
            <p v-if="project.type" class="card-text fs-5">
              <strong>Type:</strong> <span class="badge m-1" :style="{backgroundColor: project.type.color}">{{ project.type.name }}</span>
            </p>
            <div v-if="project.technologies.length > 0" class="fs-5">
              <strong >Technologie:</strong>
             
                <span
                  class="badge m-1"
                  :style="{backgroundColor: technology.color}"
                  v-for="technology in project.technologies"
                  :key="technology.name"
                >
                  <strong class="text-white" >{{ technology.name }}</strong>
                  
                </span>
            </div>
            <div class="text-center mt-4">
              <!-- <img
                  :src="project.cover_image ? `${baseSrc}/${project.cover_image}` : '../src/assets/img/no-img.jpg'"
                  class="img-fluid rounded"
                  style="max-width: 50%;"
                  alt="Project Image"
                /> -->
              <img
                src="https://picsum.photos/600/400?random=5"
                class="card-img-top"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      project: null,
    };
  },
  created() {
    const slug = this.$route.params.slug;
    axios
      .get(`http://127.0.0.1:8000/api/show/${slug}`)
      .then((resp) => {
        // console.log("pippo:" + resp.data.results);
        this.project = resp.data.results;
      })
      .catch((err) => {
        if (err.response.status === 404) {
        //   console.log("no project");
          this.$router.push({ name: "notfound" });
        }
      });
  },
};
</script>

<style scoped lang="scss">
.container {
  max-width: 1200px;
}
.card {
  background-color: #343a40;
  border: none;
}
.card-body {
  color: #ffffff;
}
.list-group-item {
  border: none;
}
</style>
