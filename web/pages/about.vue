<template>
  <section class="project__container">
    <div class="slide__container">
      <div class="about__block">
        <h2 class="title">About</h2>
        <BlockContent
          v-if="mainPhotograph.bio"
          :blocks="mainPhotograph.bio"
          class-name="about"
        />
      </div>
      <div class="about__block">
        <h3 class="title">Exhibitons</h3>
        <BlockContent
          v-if="mainPhotograph.exhibitions"
          :blocks="mainPhotograph.exhibitions"
        />
      </div>
      <div class="about__block">
        <h3 class="title">Publications</h3>
        <BlockContent
          v-if="mainPhotograph.publications"
          :blocks="mainPhotograph.publications"
        />
      </div>
      <div class="about__block">
        <h3 class="title">Education</h3>
        <BlockContent
          v-if="mainPhotograph.bio"
          :blocks="mainPhotograph.education"
        />
      </div>
    </div>
  </section>
</template>

<script>
import BlockContent from 'sanity-blocks-vue-component'
import groq from 'groq'
import sanityClient from '~/sanityClient'

const query = groq`
  *[_type == "siteSettings"][0]{
    mainPhotograph-> {
      bio,
      exhibitions,
      publications,
      education
    }
  }
`
export default {
  components: {
    BlockContent,
  },
  async asyncData() {
    return await sanityClient.fetch(query)
  },
}
</script>

<style scoped>
.project__container {
  padding: 8rem 1rem;
  box-sizing: border-box;
  min-height: calc(100% - 72px - 216px);
  display: flex;
  flex-direction: column;
  position: relative;
}

.about__block {
  font-family: 'Sporting Grotesque', sans-serif;
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  color: #555;
  line-height: 1.4;
}

.slide__container {
  display: flex;
  flex-direction: column;
}

.title {
  font-family: 'Montserrat', sans-serif;
  display: block;
  font-weight: 700;
  font-size: 45px;
  font-style: normal;
  color: #35495e;
  letter-spacing: 1px;
  padding: 2rem 0 1rem;
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
    padding: 2rem 1.5rem 2rem 316px;
    flex-direction: row;
  }

  .slide__container {
    flex-direction: row;
  }

  .about__block {
    padding: 16px;
    font-size: 20px;
    min-width: 700px;
    padding: 1rem;
  }

  .title {
    font-weight: 300;
    font-size: 100px;
    padding: 0;
  }
}
</style>
