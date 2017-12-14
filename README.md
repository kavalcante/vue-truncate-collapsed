# vue-truncate-collapsed

A simple Vue 2 Component that's truncate your text and adds a "Read Me/Show Less" clickable.

## Getting Started

#### NPM

```bash
$ npm install vue-truncate-collapsed --save
```

#### Clone this repo

Clone or [download](https://github.com/kavalcante/vue-truncate-collapsed/archive/master.zip) the component and save in your own project.

## Installing

#### ES6
```js
import truncate from 'vue-truncate-collapsed';
// or
import { truncate } from 'vue-truncate-collapsed';

new Vue({
  components: {
    truncate
  }
})
```

#### CommonJS

```js
var truncate = require('vue-truncate-collapsed');

new Vue({
  components: {
    'truncate': truncate
  }
})
```

## USAGE

#### Text

```html
<truncate clamp="..." :length="90" less="Show Less" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam modi consequuntur quis porro explicabo iusto repudiandae odio nobis, assumenda iure totam, eum expedita quae at nostrum excepturi corrupti unde et."></truncate>
```

#### Raw HTML

```html
<truncate clamp="..." :length="90" less="Show Less" type="html" text="<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> <p> Quam modi consequuntur quis porro explicabo iusto repudiandae odio nobis, assumenda iure totam, eum expedita quae at nostrum excepturi corrupti unde et.</p>"></truncate>
```

## Attributes


| Option        | Default       | Type   | Description  |
| :------------ | :------------ | :----- | :--------- |
| __text__     | no default value | string | The text that will be truncated. |
| __length__   | 100 | number | Length of text after truncate. |
| __clamp__    | Read More | string | Link that will be after the text with a link to expand. |
| __less__   | Show Less | string | Link that will be after the text when it's expand, when click text collapses. |
| __type__   | text | string | Either `text` or `html`. To change whether to treat the input from `text` attribute as text or raw HTML. |

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
