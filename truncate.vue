<template>
<p>
  <span v-if="!show">{{truncate(text)}} <a @click="toggle()">{{clamp || 'Read More'}}</a></span>
  <span v-if="show">{{text}} <a @click="toggle()">{{less || 'Show Less'}}</a></span>
</p>
</template>

<script>
export default {

  name: 'truncate',
  props: ['text', 'clamp', 'length', 'less'],
  methods: {
    truncate(string) {
      return string.toString().substring(0, this.length || 100);
    },
    toggle() {
      this.show = !this.show;
    },
  },

  data() {
    return {
      show: false,
      counter: this.length,
    };
  },
};
</script>

<style lang="css" scoped>
  a {
    cursor: pointer;
  }
</style>
