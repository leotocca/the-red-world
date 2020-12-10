export const state = () => ({
  curiosity: [],
  opportunity: [],
  spirit: [],
})

export const actions = {
  async getImages({ commit }, { rover }) {
    const { photos: images } = await this.$axios.$get(
      `/api/v1/rovers/${rover}/photos?sol=100&page=1&api_key=${this.$config.API_KEY}`
    )
    commit('setImages', { rover, images })
  },
}

export const mutations = {
  setImages(state, { rover, images }) {
    if (rover === 'curiosity') state.curiosity = images
    if (rover === 'spirit') state.spirit = images
    if (rover === 'opportunity') state.opportunity = images
  },
}
