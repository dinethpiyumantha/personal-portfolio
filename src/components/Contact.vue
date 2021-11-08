<template>
  <div class="container pt-4">
    <div class="row d-flex justify-content-center">
      <div class="col-lg-6">
        <form v-on:submit.prevent="sendEmail">
          <div class="card p-4">
            <h2>Get in touch with me</h2>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Name</label
              >
              <input
                v-model="item.name"
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                name="user_name"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Email Address</label
              >
              <input
                v-model="item.email"
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                name="user_email"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label"
                >Message</label
              >
              <textarea
                v-model="item.message"
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="6"
                name="message"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-dp mb-3 w-25">Send</button>
          </div>
        </form>
      </div>
      <!-- <div class="col-sm-6">
          <div class="d-flex">

          </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert';
import Vue from "vue";
import Firebase from "firebase";
import toastr from "toastr";

// EmailJs
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_V3doF0fjpXZY2jCuDMEtN");

let config = {
  apiKey: "AIzaSyDOCAbC123dEf456GhI789jKl01-MnO",
  authDomain: "myapp-project-123.firebaseapp.com",
  databaseURL: "https://my-portfolio-site-f532d-default-rtdb.firebaseio.com/",
  projectId: "myapp-project-123",
  storageBucket: "myapp-project-123.appspot.com",
  messagingSenderId: "65211879809",
  appId: "1:65211879909:web:3ae38ef1cdcb2e01fe5f0c",
  measurementId: "G-8GSGZQ44ST",
};

let app = Firebase.initializeApp(config);
let db = app.database();
let textRef = db.ref("contact");

export default {
  name: "contact",
  firebase: {
    texts: textRef,
  },
  data() {
    return {
      item: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    insert: function () {
      console.log("Sent");
      let instance = Vue.$toast.open("You did it!");
      textRef.push(this.item);
      Vue.$toast.open({
        message: "Something went wrong!",
        type: "error",
        // all of other options may go here
      });
      //Vue.$toast.open({/* options */});
      // Force dismiss specific toast
      instance.dismiss();
      // Dismiss all opened toast immediately
      Vue.$toast.clear();
      Object.assign(this.$data, this.$options.data.call(this));
    },
    sendEmail: (e) => {
      var templateParams = {
        from_name: this.name,
        to_name: this.email,
        message: this.message
      }
      console.log('HELLO')
      emailjs.send('service_n2x45fn', 'template_2gpe85l', templateParams)
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
            swal("Success !", "Form submitted successfully!, Please check your email for reply soon.", "success");
        }, (error) => {
            console.log('FAILED...', error);
            swal("Error !", "Form not submitted. Please try again..", "error");
        });
    }
  },
};
</script>

<style>
</style>