<template>
  <div class="slide__container">
    <div v-for="artwork in artworks" :key="artwork._key" class="block">
      <div v-if="artwork.photography" class="block--photo">
        <SanityImage
        v-if="artwork.photography"
          :image="artwork.photography.poster"
          :height="700"
          class="image"
        />
        <p v-if="artwork.photography.poster.caption" class="caption">{{ artwork.photography.poster.caption }}</p>
      </div>
      <div v-if="artwork.video" class="block--video">
        <vimeo-player :video-id="artwork.video.videoID"></vimeo-player>
      </div>
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
    artworks: { type: Array, required: true },
  },
  mounted() {
    const content = this.$el;
    window.onwheel = (e) => {
      window.scrollBy(-e.wheelDelta, 0);
    }
  }
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
.caption {
  padding-top: 16px;
}

.block--video {
  height: 100%;
}

@media (min-width: 640px) {
  .slide__container {
    flex-direction: row;
    width: unset;
    /* height: 100%; */
  }
  .block {
    position: relative;
    height: 100%
  }
  .block--photo {
    height: 100%
  }
  img {
    width: unset;
    height: 100%
  }
}
</style>
