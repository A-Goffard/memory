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
  color: rgb(255, 255, 255);
  margin: 1rem;
  background-color: blue;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  transition: 200ms ease;
}
.boton:hover {
  color: rgb(225, 225, 255);
  background-color: rgb(66, 66, 255);
  box-shadow: 0rem 0rem 1rem 0.2rem rgb(203, 203, 251);
}
</style>

