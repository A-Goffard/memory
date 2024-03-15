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

const iconos = [
  '/img/pokemon/articuno.png',
  '/img/pokemon/bulbasaur.png',
  '/img/pokemon/dragonite.png',
  '/img/pokemon/eevee.png',
  '/img/pokemon/krokorok.png',
  '/img/pokemon/lapras.png',
  '/img/pokemon/marill.png',
  '/img/pokemon/minccino.png',
  '/img/pokemon/moltres.png',
  '/img/pokemon/Mudkip.png',
  '/img/pokemon/octillery.png',
  '/img/pokemon/pachirisu.png',
  '/img/pokemon/pikachu.png',
  '/img/pokemon/popplio.png',
  '/img/pokemon/raticate.png',
  '/img/pokemon/rowlet.png',
  '/img/pokemon/Sandshrew.png',
  '/img/pokemon/shinx.png',
  '/img/pokemon/squirtle.png',
  '/img/pokemon/zapdos.png',
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

    // Elegir aleatoriamente 8 iconos únicos
    const iconosSeleccionados = [];
    while (iconosSeleccionados.length < 8) {
        const indiceAleatorio = Math.floor(Math.random() * iconos.length);
        const icono = iconos[indiceAleatorio];
        if (!iconosSeleccionados.includes(icono)) {
            iconosSeleccionados.push(icono);
        }
    }

    // Duplicar cada icono seleccionado para tener dos de cada uno
    const iconosDuplicados = [...iconosSeleccionados, ...iconosSeleccionados];

    // Asignar cada icono duplicado a una carta
    for (let i = 0; i < iconosDuplicados.length; i++) {
        const carta = {
            id: i,
            title: `Pokemon ${i + 1}`,
            image: iconosDuplicados[i],
        };
        cartasGeneradas.push(carta);
    }

    // Mezclar aleatoriamente el orden de las cartas generadas
    cartasGeneradas.sort(() => Math.random() - 0.5);

    return cartasGeneradas;
}

function seleccionarTarjeta(index) {
    // Lógica para voltear la carta seleccionada
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