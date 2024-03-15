<template>
    <div>
        <h1>Memory Game Pokemon</h1>
        <div class="extras">
            <Puntuacion/>
            <Vidas/>
            <Intentos/>
        </div>
        <div class="memory-game">
            <div class="board">
                <div class="carta" v-for="(carta, index) in cartas" :key="index" @click="seleccionarTarjeta(index)">
                    <CartasPokemon class="cara superior" :carta="carta" />
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
import CartasPokemon from '/src/components/CartasPokemon.vue';

const pokemons = [
    { name: 'Articuno', image: '/img/pokemon/articuno.png', trasera: '/img/pokemon/pokeball.png' },
    { name: 'Bulbasaur', image: '/img/pokemon/bulbasaur.png', trasera: '/img/pokemon/pokeball.png' },
    { name: 'Dragonite', image: '/img/pokemon/dragonite.png', trasera: '/img/pokemon/pokeball.png' },
    { name: 'Eevee', image: '/img/pokemon/eevee.png', trasera: '/img/pokemon/pokeball.png' },
    { name: 'Krokorok', image: '/img/pokemon/krokorok.png', trasera: '/img/pokemon/pokeball.png' },
    { name: 'Lapras', image: '/img/pokemon/lapras.png', trasera: '/img/pokemon/pokeball.png' },
    { name: 'Marill', image: '/img/pokemon/marill.png', trasera: '/img/pokemon/pokeball.png' },
    { name: 'Minccino', image: '/img/pokemon/minccino.png', trasera: '/img/pokemon/pokeball.png' },
    { name: 'Moltres', image: '/img/pokemon/moltres.png', trasera: '/img/pokemon/pokeball.png' },
    { name: 'Mudkip', image: '/img/pokemon/Mudkip.png', trasera: '/img/pokemon/pokeball.png' },
    { name: 'Octillery', image: '/img/pokemon/octillery.png', trasera: '/img/pokemon/pokeball.png' },
    { name: 'Pachirisu', image: '/img/pokemon/pachirisu.png', trasera: '/img/pokemon/pokeball.png' },
    { name: 'Pikachu', image: '/img/pokemon/pikachu.png', trasera: '/img/pokemon/pokeball.png' },
    { name: 'Popplio', image: '/img/pokemon/popplio.png', trasera: '/img/pokemon/pokeball.png' },
    { name: 'Raticate', image: '/img/pokemon/raticate.png', trasera: '/img/pokemon/pokeball.png' },
    { name: 'Rowlet', image: '/img/pokemon/rowlet.png', trasera: '/img/pokemon/pokeball.png' },
    { name: 'Sandshrew', image: '/img/pokemon/Sandshrew.png', trasera: '/img/pokemon/pokeball.png' },
    { name: 'Shinx', image: '/img/pokemon/shinx.png', trasera: '/img/pokemon/pokeball.png' },
    { name: 'Squirtle', image: '/img/pokemon/squirtle.png', trasera: '/img/pokemon/pokeball.png' },
    { name: 'Zapdos', image: '/img/pokemon/zapdos.png', trasera: '/img/pokemon/pokeball.png' },
];

let selecciones = [];

// Crea una propiedad reactiva para almacenar las cartas
const cartas = ref([]);

function nuevaPartida() {
    cartas.value = generarCartas(); // Actualiza el valor de la propiedad reactiva cartas
}

function generarCartas() {
    const seleccionados = [];
    const cartasGeneradas = [];

    // Elegir aleatoriamente 8 Pokémon únicos
    const pokemonsSeleccionados = [];
    while (pokemonsSeleccionados.length < 8) {
        const indiceAleatorio = Math.floor(Math.random() * pokemons.length);
        const pokemon = pokemons[indiceAleatorio];
        if (!pokemonsSeleccionados.includes(pokemon)) {
            pokemonsSeleccionados.push(pokemon);
        }
    }

    // Duplicar cada Pokémon seleccionado para tener dos de cada uno
    const pokemonsDuplicados = [...pokemonsSeleccionados, ...pokemonsSeleccionados];

    // Asignar cada Pokémon duplicado a una carta
    for (let i = 0; i < pokemonsDuplicados.length; i++) {
        const carta = {
            id: i,
            name: pokemonsDuplicados[i].name,
            image: pokemonsDuplicados[i].image,
            
        };
        cartasGeneradas.push(carta);
    }

    // Mezclar aleatoriamente el orden de las cartas generadas
    cartasGeneradas.sort(() => Math.random() - 0.5);

    return cartasGeneradas;
}

function seleccionarTarjeta(index) {
    // Cambiar la propiedad volteada de la carta seleccionada

}
</script>

<style scoped>
img {
    width: 100%;
    border-radius: 0.5rem;
}
.carta {
    width: 10rem;
    position: relative;
    border-radius: 0.5rem;
    cursor: pointer;
/*     background-image: url(/public/img/pokemon/pokeball.jpg); */
}
.board {
    display: grid;
    grid-template-columns: 15rem 15rem 15rem 15rem;
    gap: 0.5rem;
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
}

button {
    margin: 0.5rem;
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