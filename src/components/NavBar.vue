<script setup>
import { RouterLink, RouterView } from 'vue-router' 
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary but fixed-top">
  <div class="container-fluid color">
    <a class="navbar-brand" href="#"><strong>JOELAM</strong></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link">Home</RouterLink>
        </li>

        <li class="nav-item">
          <RouterLink to="/ContactUsView" class="nav-link">Contact</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/AboutUsView" class="nav-link">About</RouterLink>
        </li>
        <div class="dropdown">
          <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            News_Categories
          </button>
          <ul class="dropdown-menu">
            <li><RouterLink to="/NewsCategoryView/technology" class="nav-link">Technology</RouterLink></li>
            <li><RouterLink to="/NewsCategoryView/business" class="nav-link">Business</RouterLink></li>
            <li><RouterLink to="/NewsCategoryView/travel" class="nav-link">Travel</RouterLink></li>
            <li><RouterLink to="/NewsCategoryView/culture" class="nav-link">Culture</RouterLink></li>
          </ul>
        </div>
        
        
      </ul>
      <!-- <form class="d-flex" role="search">
            <RouterLink to="/NewsCategoryView/technology" class="nav-link">Technology</RouterLink>
            <li><RouterLink to="/NewsCategoryView/business" class="nav-link">Business</RouterLink></li>
            <li><RouterLink to="/NewsCategoryView/travel" class="nav-link">Travel</RouterLink></li>
            <li><RouterLink to="/NewsCategoryView/culture" class="nav-link">Culture</RouterLink></li>
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> -->
    </div>
  </div>
</nav>
<RouterView />
</template>

<style scoped>
.color {
  background-color: purple;
  color: rgba(150, 49, 31, 0.719); /* For better contrast */
  padding: 5px;
}
</style>