<template>
  <dir>
    <Nav/>
    <router-view></router-view>
  </dir>
</template>

<script>
import Inicio from './views/Inicio.vue';
import Nav from './components/Nav.vue';

export default {
  name: 'App',
  components: {
    Nav,
    Inicio
  }
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  text-decoration: none;
}
</style>