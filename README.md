# TIC TAC TOE Práctica IWEB

Este proyecto es un juego Tic Tac Toe realizado como práctica para la asignatura Ingeniería Web.

## Paso 1

En el paso 1 se ha creado el esqueleto del proyecto y se han definido que los datos necesarios para pintar el juego son:

**turn**: Indica de quien es el turno, tendrá que tener valores que denoten al jugador 1 y a al jugador 2.

**values**: Indica el estado de las diferentes casillas del juego, representadas como un array de array, con valores 0, X o -.

## Paso 2

En el paso 2 hemos creado los componentes Header.jsx que indica de qué jugador es el turno, y el componente board que muestra el estado del tablero con la prop values.

Para ello hemos recorrido nuestro array de arrays values con funciones map, pintando cada casilla como un botón.

## Paso 3

En este nuevo paso hemos creado el componente Square, para separar cada una de las casillas del tablero, además hemos eliminado ineficiencias en los maps del paso anterior añadiendo keys específicas a cada elemento de las funciones map.

## Paso 4

En el paso 4 hemos añadido el flujo de eventos, en el que al hacer click en square se llama a buttonClick, que llama a la funcion appClick de App.jsx que modifica las props que le pasa al tablero y por tanto a la casilla, cambiando el valor de esta. También se cambia el header para mostrar el nuevo turno.

## Paso 5

Hemos añadido un botón de rest para el juego. Además hemos que una casilla clickada no pueda volver a serlo y que se vea este cambio con el cursor

## Paso 6

En el paso 6 hemos creado la función fetch que trae los datos de una partida preguardada y los pinta en nuesto juego, además se ha añadido una pantalla de loading hasta que este juego que traemos con fetch haya terminado de cargar.

## Paso 7

Por último, se han añadio con react-bootstrap estilos al botón de resetear el juego y al header que ahora es un componente llamado card