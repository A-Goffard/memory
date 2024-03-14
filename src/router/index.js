import { createRouter, createWebHistory } from 'vue-router';
import Inicio from '../views/Inicio.vue';
import Equipo from '../views/Equipo.vue';
import Juegos from '../views/Juegos.vue';
import Contacto from '../views/Contacto.vue';
import MemoryGame from '../views/juegos/MemoryGame.vue';
import TicTacToe from '../views/juegos/TicTacToe.vue';


const routes = [
    {
        path: '/',
        name: 'Inicio',
        component: Inicio,
    },
    {
        path: '/equipo',
        name: 'Equipo',
        component: Equipo,
    },
    {
        path: '/juegos',
        name: 'Juegos',
        component: Juegos,
    },
    {
        path: '/contacto',
        name: 'Contacto',
        component: Contacto,
    },
    {
        path: '/memorygame',
        name: 'MemoryGame',
        component: MemoryGame,
    },
    {
        path: '/tictactoe',
        name: 'TicTacToe',
        component: TicTacToe,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router;