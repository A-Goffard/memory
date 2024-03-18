<template>
  <div>
    <h1>Lista de Tareas</h1>
    <NuevoTarea @nuevaTarea="agregarTarea" />
    <TareaLista :tareas="tareas" @eliminarTarea="eliminarTarea" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import NuevoTarea from '/src/components/aplicaciones/NuevaTarea.vue';
import TareaLista from '/src/components/aplicaciones/TareaLista.vue';

const tareas = ref([]);

const cargarTareasDesdeLocalStorage = () => {
  const storedTareas = localStorage.getItem('tareas');
  if (storedTareas) {
    tareas.value = JSON.parse(storedTareas);
  }
};

const agregarTarea = (descripcion) => {
  if (!descripcion.trim()) {
    alert('Por favor, escriba algo antes de agregar una tarea.');
    return; // No agregar tarea si la descripción está vacía
  }
  const nuevaTarea = {
    id: tareas.value.length + 1,
    descripcion
  };
  tareas.value.push(nuevaTarea);
  guardarTareasEnLocalStorage();
};

const eliminarTarea = (id) => {
  tareas.value = tareas.value.filter(tarea => tarea.id !== id);
  guardarTareasEnLocalStorage();
};

const guardarTareasEnLocalStorage = () => {
  localStorage.setItem('tareas', JSON.stringify(tareas.value));
};

onMounted(cargarTareasDesdeLocalStorage);
</script>

<style scoped>
  
  </style>