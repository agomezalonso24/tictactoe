# TIC TAC TOE Práctica IWEB

Este proyecto es un juego Tic Tac Toe realizado como práctica para la asignatura Ingeniería Web.

## Paso 1

En el paso 1 se ha creado el esqueleto del proyecto y se han definido que los datos necesarios para pintar el juego son:

**turn**: Indica de quien es el turno, tendrá que tener valores que denoten al jugador 1 y a al jugador 2.

**values**: Indica el estado de las diferentes casillas del juego, representadas como un array de array, con valores 0, X o -.

## Paso 2

En el paso 2 hemos creado los componentes Header.jsx que indica de qué jugador es el turno, y el componente board que muestra el estado del tablero con la prop values.

Para ello hemos recorrido nuestro array de arrays values con funciones map, pintando cada casilla como un botón.

