<template>
  <div>
    <h1>Tic Tac Toe</h1>
    <div class="extras">
        <Puntuacion/>
        <Vidas/>
        <Intentos/>
    </div>
    <div class="tictactoe">
        <div class="board">
            <div class="card" v-for="(cards, index) in cards" :key="index">
                <img :src="cards.image">
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import Puntuacion from '/src/components/Puntuancion.vue';
import Vidas from '/src/components/Vidas.vue';
import Intentos from '/src/components/Intentos.vue';

import {Ref} from "vue";

const tablero = ref([
    ['','',''],
    ['','',''],
    ['','',''],
])




</script>

<style scoped>
.tictactoe {
    display: flex;
    justify-content: center;
}

.extras {
    display: flex;
    justify-content: center;
}
</style>