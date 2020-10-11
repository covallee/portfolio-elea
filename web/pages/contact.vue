<template>
  <section class="project__container">
    <div class="slide__container">
      <div class="slide">
        <h2 class="title">Socials</h2>
        <ul class="social__wrapper">
          <li v-for="social in socials" :key="social._key" class="social">
            <a :href="social.url"
              ><IconBase :icon-name="social.title" width="44" height="44"
                ><component :is="'Icon' + social.title" /></IconBase
            ></a>
          </li>
        </ul>
      </div>
      <div class="slide">
        <h2 class="title">Contact Me</h2>
        <ContactForm />
      </div>
    </div>
  </section>
</template>

<script>
import groq from 'groq'
import IconBase from '../components/IconBase'
import IconInsta from '../components/Icons/IconInsta'
import IconVimeo from '../components/Icons/IconVimeo'
import IconYoutube from '../components/Icons/IconYoutube'
import IconFacebook from '../components/Icons/IconFacebook'
import ContactForm from '../components/ContactForm'
import sanityClient from '~/sanityClient'

const query = groq`
  *[_type == "photograph" && slug.current == "elea-jeanne-schmitter"][0]
`
export default {
  components: {
    ContactForm,
    IconBase,
    IconInsta,
    IconVimeo,
    IconFacebook,
    IconYoutube,
  },
  async asyncData() {
    return await sanityClient.fetch(query)
  },
}
</script>

<style scoped>
.slide__container {
  display: flex;
  flex-direction: column;
}

.project__container {
  padding: 8rem 2rem;
  box-sizing: border-box;
  min-height: calc(100% - 72px - 216px);
  display: flex;
  flex-direction: column;
  position: relative;
}

.social__wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem 0;
}

.social {
  padding-right: 2rem;
  color: #6a6052;

  & a:visited {
    color: #6a6052;
  }

  & a:hover,
  & a:focus {
    color: #35495e;
  }
}

.slide__container {
  display: flex;
}

.title {
  font-family: 'Montserrat', sans-serif;
  display: block;
  font-weight: 700;
  font-size: 45px;
  font-style: normal;
  color: #35495e;
  letter-spacing: 1px;
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

  .slide {
    padding: 16px;
    font-size: 20px;
    min-width: 500px;
    padding: 1rem;
  }

  .title {
    font-weight: 300;
    font-size: 100px;
  }
}
</style>
