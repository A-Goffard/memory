<template>
  <div id="main">
    <h1>TIC TAC TOE</h1>
    <p id="ins">El primer jugado será la X y el juego comienza directamente tocando el tablero<br><br>El segundo jugador será el jugador O</p>
    <br><br>
    <p id="print">{{ message }}</p>
    <div class="ui">
      <div class="row">
        <input type="button" v-for="i in 9" :key="i" :id="'b' + i" class="cell" @click="cellClick(i)" readonly>
      </div>
    </div>
    <br><br><br>
    <button id="but" @click="reset">Reiniciar</button>
    <br><br>

  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const message = ref("Turno del jugador X");
    const flag = ref(1);

    function checkWin() {
  const winConditions = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // filas
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columnas
    [1, 5, 9], [3, 5, 7] // diagonales
  ];

  for (let condition of winConditions) {
    const [a, b, c] = condition;
    const cellA = document.getElementById('b' + a).value;
    const cellB = document.getElementById('b' + b).value;
    const cellC = document.getElementById('b' + c).value;

    if (cellA && cellA === cellB && cellA === cellC) {
      if (cellA === 'X') {
        message.value = "Jugador X ganador";
      } else if (cellA === '0') {
        message.value = "Jugador O ganador";
      }
      disableAllCells();
      return;
    }
  }

  // Si todas las celdas están llenas pero nadie ha ganado, hay un empate
  if (allCellsFilled()) {
    message.value = "Empate";
  }
}

function disableAllCells() {
  for (let i = 1; i <= 9; i++) {
    const cell = document.getElementById('b' + i);
    cell.disabled = true;
  }
}

function allCellsFilled() {
  for (let i = 1; i <= 9; i++) {
    const cell = document.getElementById('b' + i);
    if (!cell.value) {
      return false;
    }
  }
  return true;
}


    function cellClick(cellNumber) {
      const cell = document.getElementById('b' + cellNumber);
      if (flag.value === 1) {
        cell.value = "X";
        cell.disabled = true;
        flag.value = 0;
        message.value = "Turno del jugador O";
      } else {
        cell.value = "0";
        cell.disabled = true;
        flag.value = 1;
        message.value = "Turno del jugador X";
      }
      checkWin();
    }

    function reset() {
      location.reload();
    }

    return {
      message,
      cellClick,
      reset
    };
  }
};
</script>

<style scoped>
h1 { 
	color: blue; 
} 
.ui { 
	display: flex; 
	flex-direction: column; 
	align-items: center; 
} 
.row { 
	display: flex; 
    flex-wrap: wrap;
    width: 15rem;
} 
.cell { 
	border: none; 
	width: 5rem; 
	height: 5rem; 
	display: flex; 
	align-items: center; 
	justify-content: center; 
	font-size: 1.5rem; 
	text-align: center; 
	cursor: pointer; 
    background-color: rgb(219, 219, 252);
    color: blue;
} 
.cell:active { 
	outline: none; 
} 
/* 3*3 Grid */

#b1{ 
	border-bottom: 0.0625rem solid blue; 
	border-right: 0.0625rem solid blue; 
} 

#b2 { 
	border-bottom: 0.0625rem solid blue; 
	border-right: 0.0625rem solid blue; 
	border-left: 0.0625rem solid blue; 
} 

#b3 { 
	border-bottom: 0.0625rem solid blue; 
	border-left: 0.0625rem solid blue; 
} 

#b4 { 
	border-top: 0.0625rem solid blue; 
	border-bottom: 0.0625rem solid blue; 
	border-right: 0.0625rem solid blue; 
} 
	
#b5 { 
	border: 0.0625rem solid blue; 
} 

#b6 { 
	border-top: 0.0625rem solid blue; 
	border-bottom: 0.0625rem solid blue; 
	border-left: 0.0625rem solid blue; 
} 

#b7 { 
	border-top: 0.0625rem solid blue; 
	border-right: 0.0625rem solid blue; 
} 

#b8 { 
	border-top: 0.0625rem solid blue; 
	border-right: 0.0625rem solid blue; 
	border-left: 0.0625rem solid blue; 
} 

#b9 { 
	border-top: 0.0625rem solid blue; 
	border-left: 0.0625rem solid blue; 
} 
/* Reset Button */
#but { 

    margin: 0rem;
    font-size: xx-large;
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
    background-color: rgb(114, 114, 253);
    transition: 200ms ease;
	cursor: pointer; 
} 
#but:hover{
    color: white;
    box-shadow: 0rem 0rem 1rem 0.2rem rgb(146, 146, 255);
}
/* Player turn space */
#print {  
	color: dodgerblue; 
	font-size: 1.25rem; 
    margin-bottom: 1rem;
} 

/* Main Container */
#main { 
	text-align: center; 
} 

/* Game Instruction Text */
#ins { 
	color: dodgerblue; 
}

</style>