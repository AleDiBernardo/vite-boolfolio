<script>
export default {
  props: {
    project: Object,
  },
};
</script>

<template>
  <div class="card h-100 w-100" style="width: 18rem">
    <img
      src="https://picsum.photos/600/400?random=5"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body d-flex flex-column justify-content-between">
      <h5 class="card-title">{{ project.title }}</h5>
      <p class="card-text">
        {{ project.description }}
      </p>
      <div v-if="project.technologies.length > 0" class="d-flex">
        <div>
          <div class="fw-bold">Technologies:</div>
          <div
            class="badge m-1"
            v-for="(technology, index) in project.technologies"
            :key="index"
            :style="{ backgroundColor: technology.color }"
          >
            {{ technology.name }}
          </div>
        </div>
      </div>
      <div v-if="project.type">
        <span class="fw-bold">Types:</span> <br />
        <div class="badge m-1" :style="{ backgroundColor: project.type.color }">
          {{ project.type.name }}
        </div>
      </div>
      <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
    </div>
  </div>
</template>

<style></style>
