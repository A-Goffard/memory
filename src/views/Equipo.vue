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

<script>
import FitxasEquipo from '../components/FitxasEquipo.vue';

export default {
    components: {
        FitxasEquipo
    },
    data() {
        return {
            fitxas: [
                {
                    id: 1,
                    nombre: 'Jesús Romero',
                    puesto: 'Srum Master',
                    trabajo: 'Developer',
                    imagen: '/public/img/jesus.jpeg',
                },
                {
                    id: 2,
                    nombre: 'Jonathan Dominguez',
                    puesto: 'Coordinator',
                    trabajo: 'Developer',
                    imagen: '/public/img/Jonny.jpeg',
                },
                {
                    id: 3,
                    nombre: 'Aintzane Goffard',
                    puesto: 'Product Owner',
                    trabajo: 'Developer',
                    imagen: '/public/img/Aintzane.jpeg',
                },
            ]
        }
    }
}
</script>

<style scoped>
.contenedor-general {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
</style>