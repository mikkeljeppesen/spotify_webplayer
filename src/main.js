import Vue from "vue";
import App from "./App.vue";
Vue.config.productionTip = true;

new Vue({
  render: h => h(App)
}).$mount("#app");

// window.onSpotifyWebPlaybackSDKReady = () => {
//   const token =
//     "BQD_ULRGD59bCLSaubTuldp6MYFYGJSKOOxkTVA3rtuc3wkXYZW2aH2L3vEn6HWHhz_RCTbVSO7fnF5Mt8uEiklNItyrPGL10pZCUNrU6dOyIEHD5NLxwM7k9tEWLECZU6WqM0iMw2s7bE4VOw2-cxHls36gLVn9gkdt";
//   const player = new Spotify.Player({
//     name: "Web Playback SDK Quick Start Player",
//     getOAuthToken: cb => {
//       cb(token);
//     }
//   });
//   player.connect();
// };
