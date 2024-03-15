<template>
    <div>
        <h1>Memory Game Pokemon</h1>
        <div class="extras">
            <Puntuacion/>
            <Vidas/>
            <Intentos/>
        </div>
        <div class="memory-game">
            <div class="board">
                <div class="carta" v-for="carta in cartas" :key="carta.id">
                    <CartasPokemon class="cara trasera" :carta="carta" />

                </div>

            </div>
        </div>
    </div>
</template>

<script>
import Puntuacion from '/src/components/Puntuancion.vue';
import Vidas from '/src/components/Vidas.vue';
import Intentos from '/src/components/Intentos.vue';
import CartasPokemon from '/src/components/CartasPokemon.vue';

export default {
    components: {
        Puntuacion,
        Vidas,
        Intentos,
        CartasPokemon,
    },
    data() {
        return {
            cartas: [
            {
                id: 1,
                title: 'Articuno',
                image: '/img/pokemon/articuno.png',
            },
            {
                id: 2,
                title: 'Bulbasaur',
                image: '/img/pokemon/bulbasaur.png',
            },
            {
                id: 3,
                title: 'Dragonite',
                image: '/img/pokemon/dragonite.png',
            },
            {
                id: 4,
                title: 'Eevee',
                image: '/img/pokemon/eevee.png',
            },
            {
                id: 5,
                title: 'Krokorok',
                image: '/img/pokemon/krokorok.png',
            },
            {
                id: 6,
                title: 'Lapras',
                image: '/img/pokemon/lapras.png',
            },
            {
                id: 7,
                title: 'Marill',
                image: '/img/pokemon/marill.png',
            },
            {
                id: 8,
                title: 'Minccino',
                image: '/img/pokemon/minccino.png',
            },
            {
                id: 9,
                title: 'Moltres',
                image: '/img/pokemon/moltres.png',
            },            
            {
                id: 10,
                title: 'Mudkip',
                image: '/img/pokemon/Mudkip.png',
            },            
            {
                id: 11,
                title: 'Octillery',
                image: '/img/pokemon/octillery.png',
            },            
            {
                id: 12,
                title: 'Pachirisu',
                image: '/img/pokemon/pachirisu.png'
            },            
            {
                id: 13,
                title: 'Pikachu',
                image: '/img/pokemon/pikachu.png',
            },
            {
                id: 14,
                title: 'Popplio',
                image: '/img/pokemon/popplio.png',
            },            
            {
                id: 15,
                title: 'Raticate',
                image: '/img/pokemon/raticate.png',
            },            
            {
                id: 16,
                title: 'Rowlet',
                image: '/img/pokemon/rowlet.png',
            },
            {
                id: 17,
                title: 'Sandshrew',
                image: '/img/pokemon/Sandshrew.png',
            },
            {
                id: 18,
                title: 'Shinx',
                image: '/img/pokemon/shinx.png',
            },
            {
                id: 19,
                title: 'Squirtle',
                image: '/img/pokemon/squirtle.png',
            },
            {
                id: 20,
                title: 'Zapdos',
                image: '/img/pokemon/zapdos.png',
            },
/*             {
                id: 21,
                title: 'Pokeball',
                image: '/img/pokemon/pokeball.jpg',
            }, */
            ]
        }
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
.carta {
    width: 10rem;
    border-radius: 0.5rem;
    cursor: pointer;
}
.board {
    display: grid;
    grid-template-columns: 15rem 15rem 15rem 15rem;
    gap: 0.5rem;
}
.memory-game {
    display: flex;
    justify-content: center;
}

.extras {
    display: flex;
    justify-content: center;
}

</style>