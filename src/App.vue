<template>
  <div class="app" id="app">
    <Nav :links="links" />
    <!-- <Music /> -->
    <Frontpage />
  </div>
</template>


<script>
import Nav from "./components/Nav.vue";
// import Music from "./components/Music.vue";
import Frontpage from "./components/Frontpage.vue";

export default {
  name: "App",
  components: {
    Nav: Nav,
    // Music: Music,
    Frontpage: Frontpage
  },
  data: function() {
    return {
      title: "My Vue Page",
      links: [
        {
          href: "/home",
          innerHTML: "home"
        },
        {
          href: "/about",
          innerHTML: "about"
        },
        {
          href: "/contact",
          innerHTML: "contact"
        }
      ],
      currentArtist: "Suspekt",
      currentSong: "Jeg Har Det Fedt",
      test2: ""
    };
  },

  methods: {}
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  max-height: 100vh;
  overflow: hidden;
  padding-right: 0 !important;
}
html {
  font-size: 5px;
}

@media only screen and (min-device-width: 667px) {
  /* html {
    font-size: 15px;
  } */
}

.test {
  margin-top: 40vh;
}

.app {
  background-color: #1f1f1f;
  height: 100vh;
  overflow: hidden;
}

h1 {
  margin: 0;
}

h2 {
  margin: 0;
}

.btn {
  transition: all 0.3s ease;
  padding: 10px 15px;
}

.btn:focus {
  outline: none;
}

.btn-primary {
  background-color: #e8ae00;
  border: 1px solid transparent;
  color: #1f1f1f;
}

.btn-primary:hover {
  background-color: #b98b00;
}

.btn-primary:active {
  background-color: #fec004;
}

.btn-secondary {
  background-color: #1f1f1f;
  border: 1px solid #e8ae00;
  color: #e8ae00;
}

.btn-secondary:hover {
  background-color: #181818;
}

.btn-secondary:active {
  background-color: #353535;
}
</style>