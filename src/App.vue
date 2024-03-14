<template>
  <dir>
    <Nav/>
    <router-view></router-view>
  </dir>
</template>

<script>
import MemoryGame from './views/MemoryGame.vue';
import Nav from "./components/Nav.vue";

export default {
  name: 'App',
  components: {
    Nav,
    MemoryGame
  }
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>