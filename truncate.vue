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
      <div v-html="text"  v-if="text.length >= length"></div>
      <a @click="toggle()" v-if="text.length >= length">{{less || 'Show Less'}}</a>
      <p v-else>
        {{h2p(text)}} 
      </p>
    </div>
  </div>
</template>

<script>
var h2p = require('html2plaintext')

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
        if(this.type == 'html') string = h2p(string);
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

  method() {
    h2p:h2p
  }
};
</script>

<style lang="css" scoped>
  a {
    cursor: pointer;
  }
</style>
