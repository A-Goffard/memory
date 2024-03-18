<template>
  <div class="fitxas-card">
    <img class="foto" :src="fitxa.imagen" alt="Fitxas equipo">
    <div class="info">
      <h2>{{ fitxa.nombre }}</h2>
      <div class="botones">
        <button @click="irALinkedIn"><img class="rrss" src="/img/linkedin.png" alt="LinkedIn">LinkedIn</button>
        <button @click="irAGitHub"><img class="rrss"  src="/img/github.png" alt="GitHub">GitHub</button>
      </div>
    </div>
  </div>
</template>

<!-- <script>
export default {
  props: {
    fitxa: {
      type: Object,
      required: true
    }
  },
  methods: {
    irALinkedIn() {
      window.open(this.fitxa.linkedin, '_blank');
    },
    irAGitHub() {
      window.open(this.fitxa.github, '_blank');
    }
  }
}
</script> -->

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  fitxa: {
    type: Object,
    required: true
  }
});

const emit = defineEmits();

const irALinkedIn = () => {
  if (props.fitxa.linkedin) {
    window.open(props.fitxa.linkedin, '_blank');
  }
};

const irAGitHub = () => {
  if (props.fitxa.github) {
    window.open(props.fitxa.github, '_blank');
  }
};
</script>

<style scoped>
.rrss {
  width: 2rem;
  height: 2rem;
}
.fitxas-card{

    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    border-radius: 0.5rem;
    border: solid 0.15rem blue;
    padding: 1rem;
    background-color: rgb(234, 234, 255);
    box-shadow: 0rem 0rem 1rem 0.1rem blue;
    transition: 250ms ease;
  }
  .fitxas-card:hover{
    box-shadow: 0rem 0rem 1rem 0.3rem blue;
    border: solid 0.15rem blue;
  }

  h2 {
    color: blue;
    margin: 0.5rem;
    font-size: xx-large;
  }

  .foto {
    width: 7rem;
    height: 7rem;
    margin: 0.5rem;
    border-radius: 0.5rem;
    box-shadow: 0rem 0rem 2rem 0.15rem blue;
  }
 
  .botones {
    display: flex;
  }
  .info{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0rem 2rem;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.3rem;
    font-size: x-large;
    padding: 0.2rem 0.5rem;
    border-radius: 0.3rem;
    background-color: rgb(114, 114, 253);
    transition: 200ms ease;
}
button:hover{
    color: white;
    box-shadow: 0rem 0rem 1rem 0.2rem rgb(146, 146, 255);
}
</style>