<template>
  <section class="project__container">
    <div class="project__desc">
      <h2 class="title">{{ title }}</h2>
      <BlockContent :blocks="overview" :v-if="overview" />
    </div>
    <Slider :photos="photos" />
  </section>
</template>

<script>
import BlockContent from 'sanity-blocks-vue-component'
import groq from 'groq'
import sanityClient from '~/sanityClient'
import Slider from '~/components/Slider'

const query = groq`
  *[_type == "project" && slug.current == $slug][0] {
    ...,
    "id": _id,
    photos[]{
      photography-> {
        ...,
        poster-> {
          ...,
          asset->
        }
      }
    }
  }
`

export default {
  components: {
    Slider,
    BlockContent,
  },
  async asyncData({ params }) {
    return await sanityClient.fetch(query, params)
  },
  computed: {},
  mounted() {},
  head() {
    return {
      title: `Project | `,
      meta: [
        {
          hid: 'description',
          name: 'description',
          // content: this.plainTextBio
        },
      ],
    }
  },
}
</script>

<style scoped>
/* @import '../../styles/custom-media.css';
@import '../../styles/custom-properties.css'; */

.project__container {
  padding: 8rem 2rem;
  box-sizing: border-box;
  min-height: calc(100% - 72px - 216px);
  display: flex;
  flex-direction: column;
  position: relative;
}

.project__desc {
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  line-height: 1.4;
  letter-spacing: 0.02em;
}

@media (min-width: 640px) {
  .project__container {
    padding: calc((100vh - 700px) / 2) 0 calc((100vh - 700px) / 2) 316px;
    flex-direction: row;
  }

  .project__desc {
    min-width: 525px;
    padding: 1rem;
  }
}

.bio {
  /* font-size: var(--font-large-size);
  line-height: var(--font-large-line-height); */

  @nest & p {
    margin: 0.25rem 0 0.5rem;
  }
}
</style>
