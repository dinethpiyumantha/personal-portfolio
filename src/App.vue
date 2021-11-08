<template>
  <div id="app">
    <div>
      <loader />
      <div>
        <nav-bar class="nav-bar" />
        <transition mode="out-in" name="fade">
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";

import NavBar from "./components/navbar";
import Loader from "./components/Loader";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    "nav-bar": NavBar,
    loader: Loader,
  },
};
</script>

<style>
#app {
  background: url("assets/pixel_overlay.png") repeat scroll left top;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  /* z-index: 2; */
}

.btn-dp {
  background: #050b12;
  color: #fff;
  border: 1px solid #050b12;
  transition: 0.2s;
}
.btn-dp:hover {
  color: #050b12;
  background: #fff;
}
.nav-bar {
  z-index: 900;
}
@media only screen and (max-width: 768px) {
  .nav-bar {
    text-align: center;
    width: 100vw;
    position: fixed;
    bottom: 0px;
  }
}
.vue-typer {
  font-family: monospace;
}

.vue-typer .custom.char {
  color: #d4d4bd;
  background-color: #1e1e1e;
}
.vue-typer .custom.char.selected {
  background-color: #264f78;
}

.vue-typer .custom.caret {
  width: 10px;
  background-color: #fff;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-0.5em);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
</style>
