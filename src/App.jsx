import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Header from './Header';
import Board from './Board';
import Reset from './Reset';

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
  const [moves, setMoves] = useState(0);
  const [loading, setLoading] = useState(true);
  
  useEffect(()=>{
    async function fetchData(){
      const res = await fetch("https://api.npoint.io/c734e05e43c5b87dd971")
      const myjson = await res.json();
      console.log(myjson);
      setTurn(myjson.turn);
      setValues(myjson.values);
      setMoves(myjson.moves);
      setLoading(false);
    }
    fetchData();
  }, [])
  


  function appClick(rowNumber, colNumber){
    console.log("CLICK en " + rowNumber + "," + colNumber);
    let valuesCopy = JSON.parse(JSON.stringify(values));
    let newMove = turn===PLAYERX ? "X":"0";
    valuesCopy[rowNumber][colNumber]= newMove;
    setTurn(turn===PLAYERX ? PLAYER0:PLAYERX);
    setMoves(moves=> moves+1);
    setValues(valuesCopy);
  }

  function resetClick(){
    setValues(initialState);
    setMoves(0);
    setTurn(PLAYERX);
  }
  
  return (
    <div className="App">
      <h2>TicTacToe</h2>
      {loading ? <h1>LOADING...</h1> : <div><Header turn={turn} />
      <Board values={values} appClick={appClick} />
      <h3>Número de movimientos: {moves}</h3>
      <Reset resetClick = {resetClick}/></div>}
      
    </div>
  );
}

export default App;
