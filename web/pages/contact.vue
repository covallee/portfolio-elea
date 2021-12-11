<template>
  <section class="project__container">
    <div class="slide__container">
      <div class="slide">
        <h2 class="title">Socials</h2>
        <SocialMedia />
      </div>
      <div class="slide">
        <h2 class="title">Contact Me</h2>
        <ContactForm />
      </div>
    </div>
  </section>
</template>

<script>
import ContactForm from '../components/ContactForm'
import SocialMedia from '../components/SocialMedia.vue'

export default {
  components: {
    ContactForm,
    SocialMedia,
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
  padding: 2rem 0 1rem;
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
    padding: 1rem 0;
  }
}
</style>
