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
  
  
  
  return (
    <div className="App">
      <h2>TicTacToe</h2>
      <Header turn={turn} />
      <Board values={values} />
    </div>
  );
}

export default App;
