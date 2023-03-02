// import { plugins } from '../plugins/vuex-persist'

// like data in component

export const state = () => ({
  count: 0,
  name: "mo",
  loggedIn: null,
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

  increment(state) {
    return state.count++;
  },

  increment2(state, n) {
    state.count += n;
  },

  increment3(state, payload) {
    return (state.count = payload.incrementBy3);
  },

  SET_NAME(state) {
    return state.name;
  },
};

// like methods  it call  with :  this.$store.dispatch('mutation_method_name',updated value)

export const actions = {
  increment(context) {
    return context.commit("increment");
  },
  updateIncrement2(context, payload) {
    return context.commit("increment2", payload);
  },
  updateIncrement3({ commit }, payload) {
    commit("increment3", payload);
  },

  updateSetName(context, payload) {
    context.commit("SET_NAME", payload);
  },

  updateLogin({ commit }, user) {
    commit("LOGIN", user);
  },
  updateLogout({ commit }) {
    commit("LOGOUT");
  },
};
