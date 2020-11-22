<template>
<div>

<audio v-bind:src='songLink' controls>
</audio>

</div>
  
</template>

<script>

export default {
  name: 'playerController',
  props: [
      'songLink'
  ],
  mounted() {
      console.log(this.songLink);
  }

}

</script>