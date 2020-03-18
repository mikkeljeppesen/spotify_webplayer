<template>
  <div class="main">
    <div class="info">
      <h2>WELCOME TO YOUR OWN</h2>
      <h1>SPOTIFY QUEUE</h1>
      <div class="form-control">
        <button class="btn btn-primary">GO TO QUEUE</button>
        <button v-on:click="modal" class="btn btn-secondary">
          ADD TO QUEUE
        </button>
      </div>
    </div>
    <img src="@/assets/spotify.png" alt />
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>

<style src="@/assets/sweetalert.css"></style>

<script>
export default {
  name: "Nav",
  props: {
    links: {
      type: Array,
      required: true
    }
  },
  methods: {
    modal: function() {
      (async () => {
        const { value: text } = await Swal.fire({
          title: "SPOTIFY QUEUE",
          text: "Insert the song uri in the field below",
          input: "textarea",
          inputPlaceholder: "Insert the song uri in the field here...",
          buttonsStyling: "false"
        });

        if (text) {
          // console.log(text); // here i get the value of the input when i hit okay.
          // run all the fetch code in here,
          var songURI = text;
          Swal.fire(text).then(
            console.log("hello world"),
            fetch("https://api.spotify.com/v1/me/player/devices", {
              method: "GET", // *GET, POST, PUT, DELETE, etc.
              headers: {
                "Content-Type": "application/json",
                Authorization:
                  "Bearer BQDegEMxh8HzYunxAfQbWDKOt4QBL5dUQMb38p5m4xbMd-jwvRdYfD1xWYl1bPbQPGqHh-245Cqfrmh5xs9OWUsxeLlZaLS5MBOM1eL0CqGuqXFr54G22nbcv8b8yJ-ZwNg8Y-oqgfKN8JMGFsUQ5TwGPXosQGcTc-au5lQY-bk4FIztl5dNp4aMghQtsu62y0Q6OlK8U9xLlC-i4hSAJFMG08DUX1Iq45_f1VwVCBrYCsl8u1eA_bMPw_0OXDflj1onIulSTcFPVdw"
              }
            })
              .then(data => {
                return data.json();
              })
              .then(data => {
                console.log(data);
                return fetch(
                  "https://api.spotify.com/v1/me/player/queue?" +
                    songURI +
                    "uri=spotify%3Atrack%3A096YMXAP2VuIKL4SUOfjOI&device_id=aa471891e0aafc08757729e8739ee44f93220986",
                  {
                    method: "POST", // *GET, POST, PUT, DELETE, etc.
                    mode: "no-cors",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization:
                        "Bearer BQACUVF-kb_0idSUqs9O9RYPnZ-_ZCTCDvM-7wdNDsAArp7h31ov-fYyPgHmQfcczP05-zpRAUUA-mbkn1cvXgZNLrDZyv8tmOE7xnsYkZAkI4k3kBVGVVmPf8K1IdnVM2lhDYzYuerzcNub29-enQwVT76AWKgCr8_3_urM0ZfFpWXX7aEeL0VVJPSUi4C-IfQTAQ8QERzoMbJ4oT_4O3QucMdlNJZdvaFYCKu5fPXy1sF9qyLlTK5CHz62q2ELCTXseTrYYFYv8bo"
                    }
                  }
                );
              })
              .then(data => {
                console.log(data);
              })
          );
        }
      })();
    },
    songURI: function() {
      var modalBtn = document.querySelector(".swal2-confirm");
      modalBtn.addEventListener("click", function() {
        console.log("hello world");
      });
    }
  }
};
</script>

<style scoped>
.main {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
}

.info {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  color: white;
  z-index: 1;
}

.btn-primary {
  margin-right: 2rem;
}

h1 {
  text-align: left;
  font-size: 10vw;
}

h2 {
  text-align: left;
  font-size: 3vw;
  margin-bottom: -3vw;
}

img {
  display: none;
}

@media only screen and (min-device-width: 667px) {
  .info {
    margin-left: 25rem;
  }
  h1 {
    font-size: 5vw;
  }

  h2 {
    font-size: 2vw;
    margin-bottom: -2vh;
  }

  img {
    width: 40vw;
    height: 40vw;
    max-width: 125rem;
    max-height: 125rem;
    position: absolute;
    bottom: -15rem;
    right: -15rem;
    transform: rotate(20deg);
    display: block;
  }
}

@media screen and (min-device-width: 1200px) {
  h1 {
    font-size: 5vw;
  }
  h2 {
    margin-bottom: -1.8vw;
  }
}
</style>
