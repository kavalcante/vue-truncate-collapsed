<template>
  <div>
    <div v-if="!show">
      <span :class="textClass">
        {{truncate(text)}}
      </span>
      <a v-if="text.length >= length" @click="toggle()" :class="actionClass">{{clamp}}</a>
    </div>
    <div v-if="show && type !== 'html'">
      <span>{{text}}</span>
      <a @click="toggle()" v-if="text.length >= length" :class="actionClass">{{less}}</a>
    </div>
    <div v-else-if="show && type === 'html'">
      <div v-html="text"  v-if="text.length >= length"></div>
      <a @click="toggle()" v-if="text.length >= length" :class="actionClass">{{less}}</a>
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
    collapsedTextClass: {
      type: String
    },
    text: {
      type: String,
      required: true
    },
    clamp: {
      type: String,
      default: 'Read More'
    },
    length: {
      type: Number,
      default: 100
    },
    less: {
      type: String,
      default: 'Show Less'
    },
    type: {
      type: String,
      default: 'text'
    },
    actionClass: {
      type: String,
      default: ''
    },
  },
  computed: {
    textClass () {
      return (this.text.length > this.length && this.collapsedTextClass) ? this.collapsedTextClass : '';
    }
  },
  methods: {
    truncate(string) {
      if (string) {
        if(this.type == 'html') string = h2p(string);
        return string.toString().substring(0, this.length);
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
