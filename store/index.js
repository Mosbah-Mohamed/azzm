// import { plugins } from '../plugins/vuex-persist'

// like data in component

export const state = () => ({
  loggedIn: false,
  user: {},
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
  SET_USER(state, user) {
    state.user = user;
  },

  LOGIN(state, user) {
    state.loggedIn = true;
    state.user = user;
  },

  LOGOUT(state) {
    state.loggedIn = false;
    state.user = {};
  },
};

// like methods  it call  with :  this.$store.dispatch('mutation_method_name',updated value)

export const actions = {
  updateLogin({ commit }, user) {
    commit("LOGIN", user);
  },
  updateLogout({ commit }) {
    commit("LOGOUT");
  },
};
