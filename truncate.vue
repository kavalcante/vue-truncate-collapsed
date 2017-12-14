<template>
  <div>
    <p v-if="!show">
      {{truncate(text)}} 
      <a v-if="text.length >= length" @click="toggle()">{{clamp || 'Read More'}}</a>
    </p>
    <p v-if="show && type !== 'html'">
      {{text}} 
      <a @click="toggle()" v-if="text.length >= length">{{less || 'Show Less'}}</a>
    </p>
    <div v-else-if="show && type === 'html'">
      <div v-html="text"></div>
      <a @click="toggle()" v-if="text.length >= length">{{less || 'Show Less'}}</a>
    </div>
  </div>
</template>

<script>
var htmlToText = require('html-to-text');

export default {

  name: 'truncate',
  props: {
    text: String,
    clamp: String,
    length: Number,
    less: String,
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    truncate(string) {
      if (string) {
        if(this.type == 'html') string = htmlToText.fromString(string);
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
