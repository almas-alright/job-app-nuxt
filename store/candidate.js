export const state = () => ({
    candidateData: new Object(null)
})

export const getters = {
  candidateData(state) {
    return state.candidateData
  }
}

export const mutations = {
  SET_CANDIDATE_DATA(state, candidate) {
    state.candidateData = candidate;
  }
}

export const actions = {
  setCandidateData({ commit }, candidate) {
    commit('SET_CANDIDATE_DATA', candidate);
  },
  clearCandidateData({ commit }) {
    commit('SET_CANDIDATE_DATA', null);
  }
}
