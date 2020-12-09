export const state = () => ({
  curiosity: {
    manifest: {},
    images: [],
  },
  opportunity: {
    manifest: {},
    images: [],
  },
  spirit: {
    manifest: {},
    images: [],
  },
})

export const actions = {
  async getImages({ commit }, { rover }) {
    const { photos: images } = await this.$axios.$get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=1000&page=1&api_key=${process.env.NASA_API_KEY}`
    )
    commit('setImages', { rover, images })
  },
}

export const mutations = {
  setImages(state, { rover, images }) {
    if (rover === 'curiosity') state.curiosity.images = images
    if (rover === 'spirit') state.spirit.images = images
    if (rover === 'opportunity') state.opportunity.images = images
  },
}
