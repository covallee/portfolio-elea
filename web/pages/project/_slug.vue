<template>
  <div class="project">
    <section class="project__wall">
      <div class="project__desc">
        <h1 class="project__title">{{ title }}</h1>
        <BlockContent v-if="overview" :blocks="overview" />
      </div>
      <Slider :artworks="artworks" />
    </section>
  </div>
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
    artworks[]{
      photography-> {
        ...,
        poster-> {
          ...,
          asset->
        }
      },
      video-> {
        ...,
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
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
        },
      ],
    }
  },
}
</script>

<style scoped>
.project {
  display: flex;
}

.project__wall {
  padding: 8rem 2rem;
  box-sizing: border-box;
  /* min-height: calc(100% - 72px - 216px); */
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
}

.project__desc {
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  line-height: 1.4;
  letter-spacing: 0.02em;

  & p{
    padding: 8px 0;
  }
}

.project__title {
  font-size: 1.2rem;
  padding-bottom: 2rem;
}

@media (min-width: 640px) {
  .project {
    height: 98vh;
    align-items: center;
  }

  .project__wall {
    max-height: 710px;
    /* padding: calc((100vh - 710px) / 2) 0 calc((100vh - 710px) / 2) 316px; */
    padding: 0 0 0 316px;
    flex-direction: row;
  }

  .project__desc {
    min-width: 525px;
    width: 60em;
    padding: 1rem;
    flex-shrink: 0;
  }
}
</style>
