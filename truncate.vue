<template>
<p>
  <span v-if="!show">{{truncate(text)}} <a v-if="text.length >= length" @click="toggle()">{{clamp || 'Read More'}}</a></span>
  <span v-if="show">{{text}} <a @click="toggle()" v-if="text.length >= length">{{less || 'Show Less'}}</a></span>
</p>
</template>

<script>
export default {

  name: 'truncate',
  props: { 'text': String, 'clamp': String, 'length': Number, 'less': String },
  methods: {
    truncate(string) {
      if (string) {
        return string.toString().substring(0, this.length || 100);
      }

      return '';
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
