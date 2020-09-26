export const state = () => ({
    medias: []
})

export const getters = {
  medias(state) {
    return state.medias
  }
}

export const mutations = {
  SET_MEDIA_IMAGES(state, mediax) {
    state.medias = mediax;
  },
  SET_MEDIA_IMAGE(state, mediax) {
    state.medias.push(mediax);
  }
}

export const actions = {
  setMedias({ commit }, mediax) {
    commit('SET_MEDIA_IMAGES', mediax);
  },

  setMedia({ commit }, mediax) {
    commit('SET_MEDIA_IMAGE', mediax);
  },

  clearMedias({ commit }) {
    commit('SET_MEDIA_IMAGES', []);
  }
}
