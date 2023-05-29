import React from "react";


function Square({value , onSquareClick}) {
  // const [value,setvalue] = useState('');

  return <button className="square" onClick={onSquareClick}>{value}</button>;
  
}

export default Square;