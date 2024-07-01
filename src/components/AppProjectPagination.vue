<template>
    <div class="pagination">
      <button class="btn btn-primary" @click.prevent="changePage(currentPage - 1)" :disabled="currentPage === 1">Previous</button>
      <span class="text-white fw-bold">Page {{ currentPage }} of {{ totalPages }}</span>
      <button class="btn btn-primary" @click.prevent="changePage(currentPage + 1)" :disabled="currentPage === totalPages">Next</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      currentPage: {
        type: Number,
        required: true
      },
      totalPages: {
        type: Number,
        required: true
      }
    },
    methods: {
      changePage(page) {
        if (page > 0 && page <= this.totalPages) {
          this.$emit('changePage', page);
        }
      }
    }
  };
  </script>
  
  <style>
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  button {
    margin: 0 10px;
  }
  </style>
  