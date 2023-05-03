// import { plugins } from '../plugins/vuex-persist'

// like data in component

export const state = () => ({
  verify_token: "",
});

//  return data in state of store
// call with : this.$store.getters.sum

export const getters = {
  sum(state) {
    return state.count + 122;
  },
};

// ( used to update state ) call it with : this.$store.commit('increment')
// نقوم بتعيير البيانات داخل ال state

export const mutations = {
  SET_token(state, user) {
    state.verify_token = user;
  },

};

// like methods  it call  with :  this.$store.dispatch('mutation_method_name',updated value)

export const actions = {

  update_token({ commit }) {
    commit("SET_token");
  },
};
