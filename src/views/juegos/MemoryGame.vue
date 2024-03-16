<template>
    <div>
      <h1>Memory Game Pokemon</h1>
      <div class="extras">
        <Puntuacion />
        <Vidas />
        <Intentos />
      </div>
      <div class="memory-game">
        <div class="board">
          <div class="carta" v-for="(carta, index) in cartas" :key="index" @click="seleccionarTarjeta(index)">
            <div class="cara" :class="{ 'oculta': !carta.mostrar }">
              <div class="cara-superior" v-if="carta.mostrar">
                <img :src="carta.image" alt="Pokemon">
              </div>
              <div class="cara-trasera" v-else>
                <img :src="carta.trasera">
              </div>
            </div>
          </div>
        </div>
        <button @click="nuevaPartida">Nueva Partida</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Puntuacion from '/src/components/Puntuancion.vue';
  import Vidas from '/src/components/Vidas.vue';
  import Intentos from '/src/components/Intentos.vue';

  const pokemons = [
  { name: 'Bulbasaur', image: '/img/pokemon/bulbasaur.png', trasera: "/img/pokemon/shinx.jpg" },
  { name: 'Dragonite', image: '/img/pokemon/dragonite.png', trasera: "/img/pokemon/shinx.jpg" },
  { name: 'Eevee', image: '/img/pokemon/eevee.png', trasera: "/img/pokemon/shinx.jpg" },
  { name: 'Krokorok', image: '/img/pokemon/krokorok.png', trasera: "/img/pokemon/shinx.jpg" },
  { name: 'Pikachu', image: '/img/pokemon/pikachu.png', trasera: "/img/pokemon/shinx.jpg" },
  { name: 'Squirtle', image: '/img/pokemon/squirtle.png', trasera: "/img/pokemon/shinx.jpg" },
];
const cartas = ref([]);
const cartasSeleccionadas = ref([]);

function nuevaPartida() {
  cartas.value = generarCartas();
  cartasSeleccionadas.value = [];
}

function generarCartas() {
  const pokemonsDuplicados = [...pokemons, ...pokemons];
  const cartasGeneradas = pokemonsDuplicados.map((pokemon, index) => ({
    id: index,
    name: pokemon.name,
    image: pokemon.image,
    mostrar: false, // Inicialmente oculto
  }));
  return cartasGeneradas.sort(() => Math.random() - 0.5);
}

function seleccionarTarjeta(index) {
  const carta = cartas.value[index];
  if (cartasSeleccionadas.value.length < 2 && !carta.mostrar) {
    cartasSeleccionadas.value.push(carta);
    carta.mostrar = true;
    if (cartasSeleccionadas.value.length === 2) {
      setTimeout(() => {
        if (!sonIguales(cartasSeleccionadas.value)) {
          cartasSeleccionadas.value.forEach(carta => carta.mostrar = false);
        }
        cartasSeleccionadas.value = [];
      }, 1000);
    }
  }
}

function sonIguales(cartas) {
  return cartas[0].name === cartas[1].name;
}

</script>

<style scoped>
img {
    width: 95%;
    border-radius: 0.5rem;
}
.carta {
    width: 10rem;
    position: relative;
    border-radius: 0.5rem;
    cursor: pointer;
}
.board {
    display: grid;
    grid-template-columns: 10rem 10rem 10rem 10rem 10rem 10rem;
    gap: 2rem;
    
}
.memory-game {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
.extras {
    display: flex;
    justify-content: center;
}
.cara {
    width: 10rem;
    height: 15rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: rgb(173, 186, 247);
    border-radius: 0.3rem;
    border: solid blue;
    background-color: rgb(238, 238, 255);
    transition: 200ms ease;
}
.cara:hover {
    box-shadow: 0rem 0rem 1rem 0.2rem rgb(146, 146, 255);
}
button {
    margin: 2rem;
    font-size: xx-large;
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
    background-color: rgb(114, 114, 253);
    transition: 200ms ease;
}
button:hover{
    color: white;
    box-shadow: 0rem 0rem 1rem 0.2rem rgb(146, 146, 255);
}
</style>