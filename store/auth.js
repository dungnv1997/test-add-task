// store/auth.js
import users from '@/static/users.json';

export const state = () => ({
  user: null,
});

export const getters = {
    getUser: state => {
        return state.user ;
    },
  };
  

export const mutations = {
  setUser(state, user) {
    state.user = user;
    console.log('state',state)
  },
  clearUser(state) {
    state.user = null;
  },
};

export const actions = {
  async login({ commit }, credentials) {
    const user = users.find(u => u.username === credentials.username && u.password === credentials.password);
    if (user) {
      commit('setUser', user);
    } else {
      throw new Error('Invalid credentials');
    }
  },
  logout({ commit }) {
    commit('clearUser');
  },
};
