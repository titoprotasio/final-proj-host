<template>
  <div class="home">
    <input type="text" v-model="youtubeLink" id="youtubeLink" placeholder='Insert YouTube Link'>
    <label for="color">Background Baby</label>
    <input type="color" v-model="color" name="color" id="color">
    <p>{{ color }}</p>
    <button @click="postLink">Submit</button>
    <p v-if="error" style="color: #ff0000">{{error}}</p>
    <p v-if="resp" v-bind:style="{ color: color }">
      <a :href="'/player/' + resp.insertId">Visit Page</a>
    </p>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Home',
  data() {
    return {
      youtubeLink: '',
      color: '#000000',
      error: null,
      resp: null
    }
  },
  methods: {
    postLink() {
      axios.post('http://localhost:3000/video', {
        youtubeLink: this.youtubeLink,
        color: this.color
      })
      .then((res) => {
        this.resp = res.data;
      })
      .catch((err) => {
        this.err = err;
      })
    }
  }
}
</script>
