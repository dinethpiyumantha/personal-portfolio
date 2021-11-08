<template>
  <div class="my-photo-back">

    <div class="container pad pt-0 pb-4">
      <div class="row py-0">
        <div class="col-sm-7 h-50 py-5 px-2">
          <h2 class="text-white title">
            Hello, I'm Dineth Piyumantha, a software developer & UI designer
            currently based somewhere.
          </h2>
          <img
            src="../assets/signature.png"
            class="signature mt-5"
            alt="signature"
          />
          
          <p class="name mt-4 text-light">
            Dineth Piyumantha <br />
            IT Undergraduate at SLIIT
          </p>

          <input
            type="button"
            value="Download CV"
            class="btn btn-outline-light mt-3"
            @mouseover="mouseOvern()"
          />

          <br />
          <div class="mt-3">
            <vue-typer
              :text="[
                'React JS',
                'Vue Js',
                'Ant Design',
                'React Native',
                'Flutter',
                'Laravel',
                'HTML5',
                'CSS3',
                'Javascript',
                'Typescript',
                'Java',
                'C/C++',
                'Python',
                'Dart',
                'PHP',
                'Bootstrap',
                'UX/UI Designing',
                'Fullstack Development',
                'Azure DevOps',
              ]"
              :repeat="Infinity"
              :shuffle="false"
              initial-action="typing"
              :pre-type-delay="70"
              :type-delay="70"
              :pre-erase-delay="2000"
              :erase-delay="250"
              erase-style="select-all"
              :erase-on-complete="false"
              caret-animation="blink"
            ></vue-typer>
          </div>
        </div>
        <div class="col-sm-5"></div>
      </div>
    </div>
    
  </div>
</template>

<script>
import { VueTyper } from "vue-typer";

var ad = new Audio('gs://my-portfolio-site-f532d.appspot.com/audios/clickovr.wav');
//'http://127.0.0.1:8887/clickovr.wav'
export default {
  data() {
    return { 

    }
  },
  components: {
    "vue-typer": VueTyper,
  },
  methods: {
    mouseOvern() {
      console.log('clicked')
      ad.play()
    }
  }
};
</script>

<style>
.my-photo-back{
  height: calc(100vh - 70px);
  background-image: url("../assets/myphotosm.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
}
.signature {
  max-width: 300px;
}
.name {
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  font-size: 15px;
}
.title {
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  line-height: 50px;
  font-size: 40px;
}
.show-mobile {
  display: none;
}
@media only screen and (max-width: 768px) {
  .pad {
    padding: 20px 40px;
  }
  .title {
    line-height: 40px;
    font-size: 30px;
  }
  .no-mobile {
    display: none;
  }
  .show-mobile {
    display: block;
  }
  .my-photo-back{
    background-image: url("../assets/myphototra.png");
  }
}
</style>