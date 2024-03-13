<template>
  <div>
    <h1>Memory Game</h1>

    <div class="memory-game">
        <div class="board">
            <div class="card" v-for="(cards, index) in cards" :key="index">
                <img :src="cards.image">
            </div>
        </div>


    </div>
  </div>
</template>

<script>


export default {
data() {
    return {
        cards: [
/*             {
                id: 1,
                title: 'Trasera',
                image: '/img/1.png',
            }, */
            {
                id: 2,
                title: 'Pavo',
                image: '/img/2.png',
            },
            {
                id: 3,
                title: 'Pavo',
                image: '/img/2.png',
            },
            {
                id: 4,
                title: 'Patito',
                image: '/img/5.png',
            },
            {
                id: 5,
                title: 'Patito',
                image: '/img/5.png',
            },
            {
                id: 6,
                title: 'Leona',
                image: '/img/6.png',
            },
            {
                id: 7,
                title: 'Leona',
                image: '/img/6.png',
            },
            {
                id: 8,
                title: 'Rana',
                image: '/img/14.png',
            },
            {
                id: 9,
                title: 'Rana',
                image: '/img/14.png',
            },            {
                id: 10,
                title: 'Ardilla',
                image: '/img/16.png',
            },            {
                id: 11,
                title: 'Ardilla',
                image: '/img/16.png',
            },            {
                id: 12,
                title: 'Lince',
                image: '/img/18.png'
            },            {
                id: 13,
                title: 'Lince',
                image: '/img/18.png',
            },            {
                id: 14,
                title: 'Suricata',
                image: '/img/20.png',
            },            {
                id: 15,
                title: 'Suricata',
                image: '/img/20.png',
            },            {
                id: 16,
                title: 'Erizo',
                image: '/img/22.png',
            },            {
                id: 17,
                title: 'Erizo',
                image: '/img/22.png',
            },
            // Agrega más proyectos según sea necesario
            ]
    };
  },
props: {
    columns: {
    type: Number,
    default: 4
    }
  },
  computed: {
    elements() {
        return this.columns**2/2;
    }
  },
  methods: {
    
  }

}
</script>

<style scoped>
img {
    width: 100%;
    border-radius: 0.5rem;
    opacity: 0;
}
.card {
    width: 10rem;
    height: 14rem;
    border-radius: 0.5rem;
    background-image: url('/public/img/1.png');
    background-size: 100%;
}
.board {
    display: grid;
    grid-template-columns: 10rem 10rem 10rem 10rem;
    gap: 0.5rem;
}
.memory-game {
    display: flex;
    justify-content: center;
}
h1 {
    color: rgb(0, 4, 255);
}
</style>