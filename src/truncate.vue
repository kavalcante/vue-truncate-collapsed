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
    truncated: {
      type: Boolean,
      default: true
    },
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
  created() {
    this.show = this.truncated
    this.toggle(this.truncated)
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
        // We need the length of the text without the html being considered
        // This ensures we provide the right calculation for when to show/hide the more link
        const text = this.text.replace(/<[^>]*>/g, '');
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
    toggle(override) {
      // use the override value if it is set as a boolean
      const toggled = typeof override === 'boolean' ? override : !this.show;

      this.show = toggled;
      this.$emit('toggle', toggled);
    },
  },
  watch: {
    truncated(value) {
      this.toggle(value)
    }
  },
};
</script>
