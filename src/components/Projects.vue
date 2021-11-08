<template>
  <div class="container py-4">

    <div class="d-flex flex-wrap gap-3 justify-content-evenly py-3">
      <project-card/>
    </div>
  </div>
</template>

<script>
import ProjectCard from './ProjectCard/ProjectCard.vue';

export default {
  data() {
    return {
    }
  },
  components: {
    'project-card' : ProjectCard
  },
  methods: {
    
  },
  computed: {

  }
};
</script>

<style>
.card-width {
  width: 20rem;
}
.card-image-main {
  width: 20rem;
  height: 13rem;
}
</style>