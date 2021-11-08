<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light py-3">
      <div class="container-fluid">
        <div
          class="collapse navbar-collapse d-flex justify-content-center gap-3"
          id="navbarNav"
        >
          <router-link to="/">
            <div class="btn btn-outline-light rounded-circle" title="Home">
              <i class="fas fa-home"></i>
            </div>
          </router-link>

          <router-link to="/about">
            <div class="btn btn-outline-light rounded-circle" title="About Me">
              <i class="fas fa-user-circle"></i>
            </div>
          </router-link>

          <router-link to="/contact">
            <div
              class="btn btn-outline-light rounded-circle"
              title="Contact Me"
            >
              <i class="fas fa-envelope"></i>
            </div>
          </router-link>

          <router-link to="/projects">
            <div class="btn btn-outline-light rounded-circle no-mobile">
              <i class="fas fa-briefcase"></i>
            </div>
          </router-link>

          <a href="https://github.com/dinethpiyumantha" target="_blank">
            <div class="btn btn-outline-light rounded-circle no-mobile">
              <i class="fab fa-github"></i>
            </div>
          </a>

          <router-link to="/@menu">
            <div class="btn btn-outline-light rounded-circle show-mobile">
              <i class="fas fa-ellipsis-h"></i>
            </div>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
.show-mobile{
  display: none;
}

.navbar {
  /* background: #050b12; */
}

.rounded-circle {
  width: 40px;
  padding-left: 10px;
}
.circle {
  border: 2px solid #fff;
  width: 32px;
  text-align: center;
  height: 32px;
  padding-top: 3px;
  border-radius: 100px;
  font-size: 14px;
  opacity: 60%;
}
.text-lg {
  font-size: 25px;
}
.text-sm {
  font-size: 12px;
}
@media only screen and (max-width: 768px) {
  .show-mobile{
  display: block;
}
}
</style>