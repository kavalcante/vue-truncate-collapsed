/*!
 * vue-truncate-collapsed v2.0.0
 * (c) 2018-present João Vitor Cavalcante
 * Released under the MIT License.
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.vueTruncateCollapsed = factory());
}(this, (function () { 'use strict';

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = " a[data-v-11b2e33f] { cursor: pointer; } ";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var h2p = require('html-truncate');

var truncate = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [!_vm.show && _vm.type !== 'html' ? _c('div', [_c('span', { class: _vm.textClass }, [_vm._v(" " + _vm._s(_vm.truncate(_vm.text)) + " ")]), _vm._v(" "), _vm.text.length >= _vm.length ? _c('a', { class: _vm.actionClass, on: { "click": function ($event) {
          _vm.toggle();
        } } }, [_vm._v(_vm._s(_vm.clamp))]) : _vm._e()]) : !_vm.show && _vm.type === 'html' ? _c('div', [_c('span', { class: _vm.textClass, domProps: { "innerHTML": _vm._s(_vm.truncate(_vm.text)) } }), _vm._v(" "), _vm.text.length >= _vm.length ? _c('a', { class: _vm.actionClass, on: { "click": function ($event) {
          _vm.toggle();
        } } }, [_vm._v(_vm._s(_vm.clamp))]) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm.show && _vm.type !== 'html' ? _c('div', [_c('span', [_vm._v(_vm._s(_vm.text))]), _vm._v(" "), _vm.text.length >= _vm.length ? _c('a', { class: _vm.actionClass, on: { "click": function ($event) {
          _vm.toggle();
        } } }, [_vm._v(_vm._s(_vm.less))]) : _vm._e()]) : _vm.show && _vm.type === 'html' ? _c('div', [_vm.text.length >= _vm.length ? _c('div', { domProps: { "innerHTML": _vm._s(_vm.text) } }) : _vm._e(), _vm._v(" "), _vm.text.length >= _vm.length ? _c('a', { class: _vm.actionClass, on: { "click": function ($event) {
          _vm.toggle();
        } } }, [_vm._v(_vm._s(_vm.less))]) : _c('p', [_vm._v(" " + _vm._s(_vm.h2p(_vm.text)) + " ")])]) : _vm._e()]);
  }, staticRenderFns: [], _scopeId: 'data-v-11b2e33f',
  name: 'Truncate',

  props: {
    collapsedTextClass: {
      type: String,
      default: ''
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
    }
  },
  data: function data() {
    return {
      show: false,
      counter: this.length
    };
  },
  computed: {
    textClass: function textClass() {
      return this.text.length > this.length && this.collapsedTextClass ? this.collapsedTextClass : '';
    }
  },
  methods: {
    truncate: function truncate(string) {
      if (string) {
        if (this.type === 'html') { return h2p(string, this.length); }

        return string.toString().substring(0, this.length);
      }

      return '';
    },
    toggle: function toggle() {
      this.show = !this.show;
    },

    h2p: function h2p$1(text) {
      return h2p(text);
    }
  }
};

return truncate;

})));
