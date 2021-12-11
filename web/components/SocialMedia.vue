<template>
    <ul class="social__wrapper">
        <li v-for="social in socials" :key="social._key" class="social">
        <a :href="social.url"
            ><IconBase :icon-name="social.title" width="22" height="22"
            ><component :is="'Icon' + social.title" /></IconBase
        ></a>
        </li>
    </ul>
</template>

<script>
import IconBase from '../components/IconBase'
import IconInsta from '../components/Icons/IconInsta'
import IconVimeo from '../components/Icons/IconVimeo'
import IconYoutube from '../components/Icons/IconYoutube'
import IconFacebook from '../components/Icons/IconFacebook'

export default {
  components: {
    IconBase,
    IconInsta,
    IconVimeo,
    IconFacebook,
    IconYoutube,
  },
  computed: {
    socials() {
      return this.$store.state.socials
    },
  },
}
</script>

<style>
.social__wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 0;
  gap: 1rem;
}

.social {
  
  & a {
    padding: 10px;
    color: #6a6052;
  }

  & a:visited {
    color: #6a6052;
  }

  & a:hover,
  & a:focus {
    color: #35495e;
  }
}
</style>