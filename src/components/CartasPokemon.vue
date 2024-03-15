<template>
    <div class="carta">
        <h2>{{ carta.title }}</h2>
        <img :src="carta.image" alt="Pokemons">
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const { props } = defineProps({
  carta: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.carta {
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
  font-size: x-large;
}
p{
  font-size: large;
}

img {
  width: 100%;
  margin: 0.5rem;
  border-radius: 0.5rem;
}
</style>