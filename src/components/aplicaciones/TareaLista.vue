<template>
  <div class="general">


  <div class="contenedor">
    <ul>
      <li v-for="tarea in tareas" :key="tarea.id">
        {{ tarea.descripcion }}
        <button @click="eliminarTarea(tarea.id)">X</button>
      </li>
    </ul>
  </div>
</div>
  </template>
  
<!--   <script>
  export default {
    props: ['tareas'],
    methods: {
      eliminarTarea(id) {
        this.$emit('eliminarTarea', id);
      }
    }
  };
  </script> -->
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps(['tareas']);
  const emit = defineEmits();
  
  const eliminarTarea = (id) => {
    emit('eliminarTarea', id);
  };
  </script>
  
<style scoped>

li {
  color: blue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px rgb(167, 167, 255);
  padding: 2px;

}
.contenedor {
  padding: 1rem;
  min-width: 20rem;
  max-width: 30rem;
  border-radius: 0.3rem;
  background-color: rgb(209, 212, 255);
}
.general {
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
    font-size: medium;
    padding: 0rem 0.3rem;
    border-radius: 0.3rem;
    background-color: rgb(114, 114, 253);
    transition: 200ms ease;
}
button:hover{
    color: white;
    box-shadow: 0rem 0rem 1rem 0.2rem rgb(146, 146, 255);
}
</style>