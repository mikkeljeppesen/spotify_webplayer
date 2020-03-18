<template>
    <div class="music-player">
        <div class="cover" style='background-image: url("@/assets/cover.jpg")'>
        </div>
        <h3 class="song">{{currentSong}}</h3>
        <h4 class="artist">{{currentArtist}}</h4>
        <div class="time"></div>
    </div>
</template>

<script>
export default {
  name: 'Music',
  props: {
    currentSong: {
      type: String,
      default: "Song",
    },
    currentArtist: {
      type: String,
      default: "Artist",
    },
  },
  data: function(){
    return {
       
    }
  },
}
</script>

<style scoped>
.music-player {
    height: 92vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.cover {
}

h3 {
    color: white;
    font-size: 4rem;
    margin: 0;
}

h4 {
    color: white;
    font-size: 3rem;
    margin: 0;
}

.time {
    margin-top: 20px;
    width: 400px;
    height: 10px;
    background-color: #1f1f1f;
    position: relative;
}

.time:after {
    display: block;
    content: "";
    height: 10px;
    width: 100px;
    background-color: #e8ae00;
    position: absolute;

}
</style>