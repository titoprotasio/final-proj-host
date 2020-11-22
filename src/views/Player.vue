<template>
  <div class="player" v-bind:style="{ 'background-color': color }">
    <iframe width="560" height="315" :src="'https://www.youtube.com/embed/' + youtubeId" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</template>

<script> 
import axios from 'axios';

export default {
  name: 'Player',
  data() {
    return{
      youtubeId: '',
      color: '',
      id: ''
    }   
  },
  computed: {
  },
  mounted() {
    this.id = this.$route.params.id;

    axios.get('http://localhost:3000/video/' + this.id)
      .then((res) => {
        console.log(res)
        this.youtubeId = res.data[0].youtubeId;
        this.color = res.data[0].color;
      })
  },
  methods: {
    alertUser(msg) {
      alert(msg);
    }
  }
}

</script>

<style>
  .player {
    min-height: 800px;
  }
</style>