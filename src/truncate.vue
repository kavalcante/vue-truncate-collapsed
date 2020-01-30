<template>
  <div>
    <div v-if="!show && !isHTML">
      <span :class="textClass">
        {{ truncate(text) }}
      </span>
      <button
        v-if="showToggle && text.length >= length"
        :class="actionClass"
        @click="toggle">{{ clamp }}</button>
    </div>
    <div v-else-if="!show && isHTML">
      <span
        :class="textClass"
        v-html="truncate(text)" />
      <button
        v-if="showToggle && text.length >= length"
        :class="actionClass"
        @click="toggle">{{ clamp }}</button>
    </div>
    <div v-if="show && !isHTML">
      <span>{{ text }}</span>
      <button
        v-if="showToggle && text.length >= length"
        :class="actionClass"
        @click="toggle">{{ less }}</button>
    </div>
    <div v-else-if="show && isHTML">
      <div
        v-if="text.length >= length"
        v-html="text" />
      <button
        v-if="showToggle && text.length >= length"
        :class="actionClass"
        @click="toggle">{{ less }}</button>
      <p v-else>
        {{ h2p(text) }}
      </p>
    </div>
  </div>
</template>

<script>
const h2p = require('html-truncate');

export default {
  name: 'Truncate',

  props: {
    collapsedTextClass: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      required: true,
    },
    clamp: {
      type: String,
      default: 'Read More',
    },
    length: {
      type: Number,
      default: 100,
    },
    less: {
      type: String,
      default: 'Show Less',
    },
    type: {
      type: String,
      default: 'text',
    },
    actionClass: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      show: false,
    };
  },
  computed: {
    isHTML() {
      return this.type === 'html';
    },
    textClass() {
      return (this.textLength > this.length && this.collapsedTextClass) ? this.collapsedTextClass : '';
    },
    textLength() {
      if (this.isHTML) {
        const text = h2p(this.text, 0);
        return text.length;
      }

      return this.text.length;
    },
    showToggle() {
      return this.textLength > this.length;
    },
  },
  methods: {
    truncate(string) {
      if (string) {
        if (this.type === 'html') return h2p(string, this.length);

        return string.toString().substring(0, this.length);
      }

      return '';
    },
    toggle() {
      const toggled = !this.show;

      this.show = toggled;
      this.$emit('toggle', toggled);
    },
  },
};
</script>
