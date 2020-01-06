<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ApolloExample msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ApolloExample from './components/ApolloExample.vue';

export default Vue.extend({
  name: 'app',
  components: {
    ApolloExample,
  },
});
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
