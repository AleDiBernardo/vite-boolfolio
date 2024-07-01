<template>
  <nav
    class="navbar navbar-expand-lg bg-dark border-bottom border-body text-white fixed-top"
    data-bs-theme="dark"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" :to="'/'">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="'/about-us'">About</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>

.router-link-active{
    font-weight: bold;
    color: white;
}

</style>
