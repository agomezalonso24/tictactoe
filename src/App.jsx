import './App.css';
import { useState } from 'react';
import Header from './Header';
import Board from './Board';

const PLAYERX = "Player 1 -Xs";
const PLAYER0 = "Player 2 -0s";
const initialState = [
  ["-", "-", "-"],
  ["-", "-", "-"],
  ["-", "-", "-"],
]

function App() {
  const [turn, setTurn] = useState(PLAYERX);
  const [values, setValues] = useState(initialState);
  
  function appClick(rowNumber, colNumber){
    console.log("CLICK en " + rowNumber + "," + colNumber);
    let valuesCopy = JSON.parse(JSON.stringify(values));
    let newMove = turn===PLAYERX ? "X":"0";
    valuesCopy[rowNumber][colNumber]= newMove;
    setTurn(turn===PLAYERX ? PLAYER0:PLAYERX);
    setValues(valuesCopy);
  }


  
  return (
    <div className="App">
      <h2>TicTacToe</h2>
      <Header turn={turn} />
      <Board values={values} appClick={appClick} />
    </div>
  );
}

export default App;
