<template>
    <div class="carta">
        <img src="/img/pokemon/pokeball.jpg" alt="Pokemons">
    </div>
</template>

<script setup>


</script>

<style scoped>
.carta {
    margin: 1rem;
    border-radius: 0.5rem;
    border: solid 0.15rem blue;
    background-color: rgb(234, 234, 255);
    box-shadow: 0rem 0rem 1rem 0.1rem blue;
    transition: 250ms ease;
}
.carta:hover{
  box-shadow: 0rem 0rem 1rem 0.3rem blue;
  border: solid 0.15rem blue;
}

img {
  width: 100%;
  height: 100%;

  border-radius: 0.5rem;
}
</style>