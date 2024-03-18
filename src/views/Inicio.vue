<template>
  <div>
    <img :src="currentImage" alt="Imagen" style="max-width: 100%;">
    <div>
      <button @click="previousImage">Anterior</button>
      <button @click="nextImage">Siguiente</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        '/img/presentacion/1.png',
        '/img/presentacion/2.png',
        '/img/presentacion/3.png',
        '/img/presentacion/4.png',
        '/img/presentacion/5.png',
        '/img/presentacion/6.png',
        '/img/presentacion/7.png',
        '/img/presentacion/8.png',
        '/img/presentacion/9.png',
        '/img/presentacion/10.png',
        '/img/presentacion/11.png',
        '/img/presentacion/12.png',
        '/img/presentacion/13.png',
        '/img/presentacion/14.png',
        '/img/presentacion/15.png',
        '/img/presentacion/16.png',
        '/img/presentacion/17.png',
        '/img/presentacion/18.png',
        '/img/presentacion/19.png',
        '/img/presentacion/20.png',
        '/img/presentacion/21.png',
        '/img/presentacion/22.png',
        '/img/presentacion/23.png',
        '/img/presentacion/24.png',
        '/img/presentacion/25.png',
        '/img/presentacion/26.png',
        '/img/presentacion/27.png',
        '/img/presentacion/28.png',
        '/img/presentacion/29.png',
        '/img/presentacion/30.png',
        '/img/presentacion/31.png',
        '/img/presentacion/32.png',
        '/img/presentacion/33.png',
        '/img/presentacion/34.png',
        '/img/presentacion/35.png',
        '/img/presentacion/36.png',
        '/img/presentacion/37.png',
        '/img/presentacion/38.png',
        '/img/presentacion/39.png',
        '/img/presentacion/40.png',
        '/img/presentacion/41.png',
        '/img/presentacion/42.png',
        '/img/presentacion/43.png',
        '/img/presentacion/44.png',
        '/img/presentacion/45.png',
        '/img/presentacion/46.png',
        '/img/presentacion/47.png',
        '/img/presentacion/48.png',
        '/img/presentacion/49.png',
        '/img/presentacion/50.png',
        // Agrega aquí más rutas de imágenes según sea necesario
      ],
      currentIndex: 0
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    }
  },
  methods: {
    nextImage() {
      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex++;
      }
    },
    previousImage() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    }
  }
};
</script>

<style scoped>
img{
  width: 83%;
}

button {
  margin: 0.2rem;
  font-size: large;
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