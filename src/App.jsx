import { useState } from 'react'
import './App.css'

import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkWinner } from './logic/board'



function App() {

  //El tablero de juego es un Array de 9 posiciones vacías. Con el setBoard iremos actualizando el estado para ir rellenando huecos
  const [board, setBoard] = useState(Array(9).fill(null))

  //Los turnos iran cambiando y cogiendo la posicion del objeto de turnos con cada movimiento del jugador
  const [turn, setTurn] = useState(TURNS.X)

  //Usamos este State para determinar cuando hay un ganador y poder setearlo
  const [winner, setWinner] = useState(null)



  //Devolvemos los estados a sus valores iniciales
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const updateBoard = (index) => {
    //si en esa casilla ya hay algo, no hace nada la función. Si hay un ganador seteado tampoco se sigue jugando
    if (board[index] || winner) return

    //sino, actuliza el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    //y cambia el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    //Llamamos a la función de comprobar ganador. Nos va a devolver el valor del ganador (x, o) o null
    const newWinner = checkWinner(newBoard)
    //Si devuelve un valor es que hay ganador y lo seteamos
    if (newWinner) {
      setWinner(newWinner)
    }
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Volver a jugar</button>
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>{square}</Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <section>
        {
          winner !== null && (
            <section className='winner'>
              <div className="text">
                <h2>
                  {
                    winner === false ? 'Empate' : 'Ganó'
                  }
                </h2>
                <header className='win'>
                  {winner && <Square>{winner}</Square>}
                </header>
                <footer>
                  <button onClick={resetGame}>Empezar de nuevo</button>
                </footer>
              </div>
            </section>
          )
        }
      </section>
    </main>
  )

}

export default App