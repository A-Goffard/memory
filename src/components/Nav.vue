<template>
    <div class="nav">
        <router-link to="/" class="boton">Inicio</router-link>
        <router-link to="/equipo" class="boton">Equipo</router-link>
        <router-link to="/juegos" class="boton">Juegos</router-link>
        <router-link to="/contacto" class="boton">Contacto</router-link>
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
.nav {
  font-size: xx-large;
  padding: 1rem;

}
.boton{
  color: aquamarine;
  margin: 1rem;
}
</style>

