import truncate from './truncate.vue';

const VueTruncate = {
  install(Vue) {
    Vue.component('truncate', truncate);
  },
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueTruncate);
}
