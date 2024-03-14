import { createRouter, createWebHistory } from 'vue-router';
import Inicio from '../views/Inicio.vue';
import Equipo from '../views/Equipo.vue';
import Juegos from '../views/Juegos.vue';
import Contacto from '../views/Contacto.vue';

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
];

export default router;