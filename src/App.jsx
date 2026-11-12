import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import { useEffect } from 'react';
import Header from './Header';
import Board from './Board';
import Reset from './Reset';
import Spinner from 'react-bootstrap/Spinner';
import WinText from './WinText';
import Skip from './Skip';

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
  const [win, setWin] = useState(false);
  
  useEffect(()=>{
    async function fetchData(){
      const res = await fetch("https://api.npoint.io/c734e05e43c5b87dd971")
      const myjson = await res.json();
      console.log(myjson);
      if(myjson.moves%2 === 0){
          setTurn(PLAYERX);
      }else{setTurn(PLAYER0);}
      setValues(myjson.values);
      setMoves(myjson.moves);
      setLoading(false);
    }
    fetchData();
  }, [])
  
  function checkWin (values){
    if(values[0][0] === values[1][0] && values[2][0] === values[1][0] && values[0][0]!== '-'){
      setWin(true);
    }else if(values[0][1] === values[1][1] && values[2][1] === values[1][1] && values[0][1]!== '-'){
      setWin(true);
    }else if(values[0][2] === values[1][2] && values[2][2] === values[1][2] && values[0][2]!== '-'){
      setWin(true);
    }else if(values[0][0] === values[0][1] && values[0][1] === values[0][2] && values[0][0]!== '-'){
      setWin(true);
    }else if(values[1][0] === values[1][1] && values[1][1] === values[1][2] && values[1][0]!== '-'){
      setWin(true);
    }else if(values[2][0] === values[2][1] && values[2][1] === values[2][2] && values[2][0]!== '-'){
      setWin(true);
    }else if(values[0][0] === values[1][1] && values[1][1] === values[2][2] && values[0][0]!== '-'){
      setWin(true);
    }else if(values[0][2] === values[1][1] && values[1][1] === values[2][0] && values[0][2]!== '-'){
      setWin(true);
    }else {setWin(false);}
  }

  function appClick(rowNumber, colNumber){
    if(!win){
    console.log("CLICK en " + rowNumber + "," + colNumber);
    let valuesCopy = JSON.parse(JSON.stringify(values));
    let newMove = turn===PLAYERX ? "X":"O";
    valuesCopy[rowNumber][colNumber]= newMove;
    setMoves(moves=> moves+1);
    setValues(valuesCopy);
    setTurn(turn===PLAYERX ? PLAYER0:PLAYERX);
    checkWin(valuesCopy);
  }
  }

  function resetClick(){
    checkWin(initialState);
    setValues(initialState);
    setMoves(0);
    setTurn(PLAYERX);
  }

  function skipTurn(){
    setTurn(turn===PLAYERX ? PLAYER0:PLAYERX);
  }
  
  return (
    <div className="App">
      <h2>TicTacToe</h2>
      <Skip skipTurn = {skipTurn}/>
      {loading ? <Spinner animation="border" variant="dark" /> : 
      <div>
        {win ? <WinText turn={turn}/> : <Header turn={turn} />}
        <Board values={values} appClick={appClick} />
        <h3>Número de movimientos: {moves}</h3>
        <Reset resetClick = {resetClick}/>
      </div>}
      
    </div>
  );
}

export default App;
