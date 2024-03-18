<template>
        <div>
        <h1>Contacta con nosotros</h1>
        <div class="contenedor-cards">
            <div v-for="fitxa in fitxas" :key="fitxa.id">
                <FitxasEquipoContacto class="cards" :fitxa="fitxa" />
            </div>
        </div>
    </div>
</template>

<script setup>
//composition
import { ref} from 'vue';

import FitxasEquipoContacto from '../components/FitxasEquipoContacto.vue';

const fitxas= ref ([
                {
                    id: 1,
                    nombre: 'Jesús Romero',
                    linkedin: 'https://www.linkedin.com/in/jesus-david-romero160/',
                    github: 'https://github.com/JesusDavid16',
                    imagen: 'img/jesus.jpeg',
                },
                {
                    id: 2,
                    nombre: 'Jonathan Dominguez',
                    linkedin: 'https://www.linkedin.com/in/jonathan-programador-dominguez/',
                    github: 'https://github.com/JonathanADB',
                    imagen: 'img/Jonny.jpeg',
                },
                {
                    id: 3,
                    nombre: 'Aintzane Goffard',
                    linkedin: 'https://www.linkedin.com/in/aintzane-goffard-sevillano/',
                    github: 'https://github.com/A-Goffard',
                    imagen: 'img/Aintzane.jpeg',
                },
            ]);

</script>

<style scoped>
.contenedor-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

</style>