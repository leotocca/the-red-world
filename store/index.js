export const state = () => ({
  curiosity: [],
})

export const actions = {
  async getPhotos({ commit }) {
    const { photos } = await this.$axios.$get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=${process.env.NASA_API_KEY}`
    )
    commit('setPhotos', photos)
  },
}

export const mutations = {
  setPhotos(state, photos) {
    this.state.curiosity = photos
  },
}
