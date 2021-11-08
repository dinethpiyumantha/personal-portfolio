<template>
  <div class="card card-width card_container">
    <div class="overflow-hidden card-image-main">
      <img src="../../assets/myphoto.png" class="card-img-top" />
    </div>

    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card_container {
  background: none;
  border: 1px solid #fff;
  padding: 0px;
  border-radius: 10px;
  color: #fff;
}
.card-width {
  width: 20rem;
}
.card-image-main {
  width: 20rem;
  height: 13rem;
}
</style>