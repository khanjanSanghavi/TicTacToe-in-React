import React, { Fragment,useState } from "react";
import Square from "./components/squre";

const arr = Array(9);
arr.fill(null);
export default function Board() {
  const [squares,setsquares] = useState(arr);
  const [xIsNext, setXIsNext] = useState(true);

  // console.log(arr);
  function handleClick(i) {
    if(!calculateWinner(squares)){
      const newArr = squares.slice();
      if(xIsNext && newArr[i] == null){
        newArr[i] = 'X';
      }else if(!xIsNext && newArr[i] == null){
        newArr[i] = 'O';
      }
      
      setsquares(newArr);
      setXIsNext(!xIsNext);
    }}

      const winner = calculateWinner(squares);
      let Status
      if(winner){
        Status = 'Winner is - ' + winner;
      }
    
  return(
    <Fragment>
      <div>{Status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </Fragment>

  );

}

// export default function Game(){
//   return(
//     <div className="game">
//     <div className="game-board">
//         <Board/>
//     </div>
//     <div className="game-info">
        
//     </div>
//   </div>
//   );
 
// }

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}