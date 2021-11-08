<template>
  <div class="con-size bg-light">
    <div class="container p-4">
      <ul class="nav nav-pills flex-column nav-fill gap-2">
        <li class="nav-item">
          <a class="nav-link menu-btn" aria-current="page" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link menu-btn" aria-current="page" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link menu-btn" aria-current="page" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link menu-btn" aria-current="page" href="#">Active</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.con-size {
  min-height: calc(100vh - 70px);
}
.menu-btn {
  background: #dddddd;
  color: #050b12;
  transition: 0.2s;
}
.menu-btn:hover {
  background: #bdbdbd;
  color: #050b12;
}
.menu-btn:active {
  background: #050b12;
  color: #dddddd;
}

@media only screen and (max-width: 768px) {
}
</style>