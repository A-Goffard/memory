<template>
    <div>
        <h1>Equipo</h1>
        <div class="contenedor-cards">
            <div v-for="fitxa in fitxas" :key="fitxa.id">
                <FitxasEquipo :fitxa="fitxa" />
            </div>
        </div>
    </div>
    
</template>

<script setup>
//composition
import { ref} from 'vue';

import FitxasEquipo from '../components/FitxasEquipo.vue';

             const fitxas= ref([
                {
                    id: 1,
                    nombre: 'Jesús Romero',
                    puesto: 'Scrum Master',
                    trabajo: 'Developer',
                    imagen: 'img/jesus.jpeg',
                },
                {
                    id: 2,
                    nombre: 'Jonathan Dominguez',
                    puesto: 'Coordinator',
                    trabajo: 'Developer',
                    imagen: 'img/Jonny.jpeg',
                },
                {
                    id: 3,
                    nombre: 'Aintzane Goffard',
                    puesto: 'Product Owner',
                    trabajo: 'Developer',
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