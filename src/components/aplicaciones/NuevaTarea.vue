<template>
    <div>
      <input type="text" v-model="descripcion" placeholder="Jugar a Memory Game"/>
      <button @click="agregarTarea">Agregar Tarea</button>
    </div>
  </template>
  
  <script setup>
  import { ref, defineEmits } from 'vue';
  
  const descripcion = ref('');
  const emit = defineEmits();
  
  const agregarTarea = () => {
    if (!descripcion.value.trim()) {
      alert('Por favor, escriba algo antes de agregar una tarea.');
      return; // No agregar tarea si la descripción está vacía
    }
    emit('nuevaTarea', descripcion.value);
    descripcion.value = '';
  };
  </script>

<style scoped>
input {
  height: 2rem;
  width: 15rem;
  border-radius: 0.3rem;
  background-color: rgb(204, 252, 252);
  margin: 1rem;

}
button {
    margin: 0.5rem;
    font-size: large;
    padding: 0.2rem 1rem;
    border-radius: 0.3rem;
    background-color: rgb(114, 114, 253);
    transition: 200ms ease;
}
button:hover{
    color: white;
    box-shadow: 0rem 0rem 1rem 0.2rem rgb(146, 146, 255);
}
</style>