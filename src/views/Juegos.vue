<template>
    <div class="divBotones">
        <button @click="goTo('/memorygame')"> Memory Game </button>
        <button @click="goTo('/tictactoe')">Tic Tac Toe</button>
        <button>Conecta animales</button>
        <button>Juego</button>
        <button>Juego</button>

    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goTo = (route) => {
  router.push(route);
};
</script>

<style scoped>
.divBotones {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem;
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