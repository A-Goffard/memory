<template>
  <div>
    <h1>Lista de Tareas</h1>
    <NuevoTarea @nuevaTarea="agregarTarea" />
    <TareaLista :tareas="tareas" @eliminarTarea="eliminarTarea" />
  </div>
</template>

<script>
import NuevoTarea from '/src/components/aplicaciones/NuevaTarea.vue';
import TareaLista from '/src/components/aplicaciones/TareaLista.vue';

export default {
  components: {
    NuevoTarea,
    TareaLista
  },
  data() {
    return {
      tareas: []
    };
  },
  created() {
    // Cargar tareas desde el localStorage cuando se carga el componente
    const storedTareas = localStorage.getItem('tareas');
    if (storedTareas) {
      this.tareas = JSON.parse(storedTareas);
    }
  },
  methods: {
    agregarTarea(descripcion) {
      if (!descripcion.trim()) {
        alert('Por favor, escriba algo antes de agregar una tarea.');
        return; // No agregar tarea si la descripción está vacía
      }
      const nuevaTarea = {
        id: this.tareas.length + 1,
        descripcion
      };
      this.tareas.push(nuevaTarea);
      this.guardarTareasEnLocalStorage();
    },
    eliminarTarea(id) {
      this.tareas = this.tareas.filter(tarea => tarea.id !== id);
      this.guardarTareasEnLocalStorage();
    },
    guardarTareasEnLocalStorage() {
      localStorage.setItem('tareas', JSON.stringify(this.tareas));
    }
  }
};
</script>

<style scoped>
  
  </style>