<template>
  <div class="slide__container">
    <div v-for="photo in photos" :key="photo.photography._id" class="block">
      <SanityImage
        :image="photo.photography.poster"
        :height="700"
        class="image"
      />
    </div>
  </div>
</template>

<script>
import SanityImage from '~/components/SanityImage'

export default {
  components: {
    SanityImage,
  },
  props: {
    photos: { type: Array, required: true },
  },
}
</script>

<style>
.slide__container {
  display: flex;
  flex-direction: column;
  width: 100%;
}
img {
  width: 100%;
}

@media (min-width: 640px) {
  .slide__container {
    flex-direction: row;
    width: unset;
  }
  .block {
    position: relative;
    height: 700px;
  }
  img {
    width: unset;
  }
}
</style>
