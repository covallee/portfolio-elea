<template>
  <div class="nav__wrapper">
    <div class="nav__top">
      <h1>
        <nuxt-link to="/" class="logo">Elea Jeanne Schmitter</nuxt-link>
      </h1>
      <button
        class="nav__burger"
        aria-label="open menu"
        @click="isBurger = !isBurger"
      >
        <Burger :is-open="isBurger" />
      </button>
    </div>
    <nav>
      <div class="nav__inner" :class="{ visible: isBurger }">
      <ul>
        <li>
          <button class="nav__item nav__item--toplevel" @click="isWorksVisible = !isWorksVisible">
            Works
          </button>
          <ul class="nav__dropdown" :class="{ visible: isWorksVisible }">
            <li v-for="project in projects" :key="project._id">
              <nuxt-link
                v-if="!project.isVideo"
                :to="'/project/' + project.link"
                class="nav__item"
                @click.native="handler"
                >{{ project.title }}</nuxt-link
              >
            </li>
          </ul>
        </li>
        <li>
          <button class="nav__item nav__item--toplevel" @click="isVideosVisible = !isVideosVisible">
            Videos
          </button>
          <ul class="nav__dropdown" :class="{ visible: isVideosVisible }">
            <li v-for="project in projects" :key="project._id">
              <nuxt-link
                v-if="project.isVideo"
                :to="'/project/' + project.link"
                class="nav__item"
                @click.native="handler"
                >{{ project.title }}</nuxt-link
              >
            </li>
          </ul>
        </li>
        <li>
          <nuxt-link to="/about" class="nav__item nav__item--toplevel" @click.native="handler"
            >about</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/contact" class="nav__item nav__item--toplevel" @click.native="handler"
            >contact</nuxt-link
          >
        </li>
      </ul>
      <SocialMedia />
      <div class="nav__copy">Copyright © All rights reserved.</div>
      </div>
    </nav>
  </div>
</template>

<script>
import Burger from './Burger'

export default {
  components: {
    Burger,
  },
  data() {
    return {
      isWorksVisible: false,
      isVideosVisible: false,
      isBurger: false,
    }
  },
  computed: {
    projects() {
      return this.$store.state.projects
    },
  },
  methods: {
    handler() {
      this.isBurger = !this.isBurger
    },
  },
}
</script>

<style>
.nav__wrapper {
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: wheat;
  padding: 16px;
  width: 100%;
  z-index: 5;
}

.nav__top {
  display: flex;
  justify-content: space-between;
}

.logo {
  font-family: 'Sporting Grotesque', sans-serif;
  font-size: 23px;
  font-style: italic;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  color: #6a6052;
  line-height: 1.1em;
  width: 270px;
  display: block;
}

.nav__burger {
  display: block;
}

.nav__inner {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  text-align: center;
}

.nav__inner.visible {
  display: flex;
}

.nav__dropdown {
  display: none;
  width: 200px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.nav__item {
  display: inline-block;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  color: black;
  letter-spacing: -0.05em;
  padding: 10px 0;
  font-weight: 400;
  font-size: 16px;
}

.nav__item:hover,
.nav__item:focus {
  color: #0031ee;
}

.nav__item--toplevel {
  font-weight: 400;
  font-size: 18px;
  text-decoration: underline;
}


@media (min-width: 640px) {
  .nav__wrapper {
    top: 50px;
    left: 16px;
    width: unset;
  }

  .logo {
    font-size: 33px;
  }
  .nav__burger {
    display: none;
  }

  .nav__inner {
    display: flex;
    /* justify-content: start; */
    align-items: flex-start;
    text-align: unset;
  }

  .nav__dropdown {
    align-items: flex-start;
    padding-left: 16px;
  }
}

.visible {
  display: flex;
}


.nav__copy {
  margin: 10px 0;
  font-size: 12px;
}
</style>
