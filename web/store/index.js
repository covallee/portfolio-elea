import sanityClient from '~/sanityClient'

export const state = () => ({
  projects: [],
  socials: [],
})

export const getters = {
  getProjects(state) {
    return state.projects
  },
  getSocials(state) {
    return state.socials
  },
}

export const mutations = {
  setProjects(state, projects) {
    state.projects = projects
  },
  setSocials(state, socials) {
    state.socials = socials
  },
}

const query = `
  *[_type == 'project' && isVisible == true] {
    _id,
    title,
    "link": slug.current
  }
`
const querySocials = `
  *[_type == "photograph" && slug.current == "elea-jeanne-schmitter"][0]["socials"]
`


export const actions = {
  async nuxtServerInit({ commit }) {
    const projects = await sanityClient.fetch(query)
    const socials = await sanityClient.fetch(querySocials)
    // .catch((e) => console.error(e))

    commit('setProjects', projects)
    commit('setSocials', socials)
  },
}
