<template>
    <div class="d-flex flex-column justify-content-center align-items-center vh-100 text-white bg-dark">
      <!-- <h1 class="display-1">404</h1> -->
      <img src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif" alt="Not Found" class="img-fluid mb-4" >
      <p class="lead mb-4">You're lost in deep space. Let's go <a href="/">home</a></p>
      <!-- <p>Non preoccuparti, torna alla <a href="/" class="text-info">home page</a> e riprova!</p> -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound'
  };
  </script>
  
  <style scoped>
  html, body {
    height: 100%;
    margin: 0;
    font-family: 'Arial', sans-serif;
  }
  .vh-100 {
    height: 100vh;
  }
  .bg-dark {
    background-color: #343a40;
  }
  a.text-info {
    text-decoration: none;
    color: #17a2b8;
  }
  a.text-info:hover {
    color: #138496;
  }
  </style>
  