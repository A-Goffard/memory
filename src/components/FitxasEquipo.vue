<template>
  <div class="fitxas-card">
    <h2>{{ fitxa.nombre }}</h2>
    <p>{{ fitxa.puesto }}</p>
    <p>{{ fitxa.trabajo }}</p>
    <img :src="fitxa.imagen" alt="Fitxas equipo">
  </div>
</template>

<script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    fitxa: {
      type: Object,
      required: true
    }
  });
</script>

<!-- <script>
export default {
  props: {
    fitxa: {
      type: Object,
      required: true
    }
  }
}
</script> -->

<style scoped>
.fitxas-card{
    margin: 1rem;
    border-radius: 0.5rem;
    border: solid 0.15rem blue;
    padding: 1rem;
    background-color: rgb(234, 234, 255);
    box-shadow: 0rem 0rem 1rem 0.1rem blue;
    transition: 250ms ease;
  }
  .fitxas-card:hover{
    box-shadow: 0rem 0rem 1rem 0.3rem blue;
    border: solid 0.15rem blue;
  }

  h2 {
    color: blue;
    margin: 0.5rem;
    font-size: xx-large;
  }
  p{
    font-size: x-large;
  }

  img {
    width: 20rem;
    margin: 0.5rem;
    border-radius: 0.5rem;
  }
</style>