<template>
  <section class="project__container">
    <Slider :artworks="mainProject.artworks" />
  </section>
</template>

<script>
import groq from 'groq'
import sanityClient from '~/sanityClient'
import Slider from '~/components/Slider'

const query = groq`
  *[_type == "siteSettings"][0]{
  	openGraph {
      ...,
      "imageUrl":image.asset->url
		},
    mainProject-> {
      artworks[]{
        photography-> {
          ...,
          poster-> {
            ...,
            asset->
          }
        }
      }
    }
  }
`

export default {
  components: {
    Slider,
  },
  async asyncData({ params }) {
    return await sanityClient.fetch(query, params)
  },
  data() {
    return {}
  },
  head() {
    return {
      title: this.openGraph.title,
      meta: [
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.openGraph.description,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.openGraph.imageUrl,
        },
      ],
    }
  },
}
</script>

<style scoped>
.project__container {
  padding: 8rem 2rem;
  box-sizing: border-box;
  min-height: calc(100% - 72px - 216px);
  display: flex;
  flex-direction: column;
  position: relative;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

@media (min-width: 640px) {
  .project__container {
    padding: calc((90vh - 700px) / 2) 0 calc((90vh - 700px) / 2) 316px;
    flex-direction: row;
  }
}
</style>
