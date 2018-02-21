<template>
  <div id="app">
    <h1>Vue Truncate Collapsed <small><a href="https://github.com/kavalcante/vue-truncate-collapsed/blob/master/README.md">Read Me</a></small> <small><a href="https://github.com/kavalcante/vue-truncate-collapsed/issues">Issues</a></small></h1>
    <h2>Text</h2>
    <truncate clamp="Read More" :length="90" less="Show Less" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam modi consequuntur quis porro explicabo iusto repudiandae odio nobis, assumenda iure totam, eum expedita quae at nostrum excepturi corrupti unde et."></truncate>

    <h2>Raw HTML</h2>
    <truncate :length="90" less="Show Less" type="html" text="<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> <p> Quam modi consequuntur quis porro explicabo iusto repudiandae odio nobis, assumenda iure totam, eum expedita quae at nostrum excepturi corrupti unde et.</p>"></truncate>

    <h2>Add Class to Show More/Show Less link</h2>
    <truncate action-class="customClass" clamp="Show more" :length="90" less="Show Less" type="html" text="<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> <p> Quam modi consequuntur quis porro explicabo iusto repudiandae odio nobis, assumenda iure totam, eum expedita quae at nostrum excepturi corrupti unde et.</p>"></truncate>

    <h2>Add Class to Collapsed Text</h2>
    <truncate collapsed-text-class="collapsed" clamp="Show more" :length="90" less="Show Less" type="html" text="<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> <p> Quam modi consequuntur quis porro explicabo iusto repudiandae odio nobis, assumenda iure totam, eum expedita quae at nostrum excepturi corrupti unde et.</p>"></truncate>
  </div>
</template>

<script>
import Truncate from 'vue-truncate-collapsed';

export default {
  name: 'app',
  components: { Truncate },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
body {
  min-height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 50%;
  margin: auto;
}

h1 {
  margin-bottom: 30px;
}

h1, h2 {
  font-weight: normal;
}

h1 a {
  font-size: .7rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.collapsed {
  color: red;
}

.customClass {
  color: blue;
}
</style>
