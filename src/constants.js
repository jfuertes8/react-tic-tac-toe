//Con esta constante vamos a ir cambiando el turno del jugador entre 2 posibilidades, X o O.
export const TURNS = {
    X: 'x',
    O: 'o'
}

//Array de arrays con todas las combinaciones ganadoras
export const WINNER_COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]