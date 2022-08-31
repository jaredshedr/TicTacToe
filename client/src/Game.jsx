import React, { useState, useEffect } from "react";
import winDecider from './winDecider.js'

const rowStyle = {
  display: "flex",
};

const squareStyle = {
  width: "60px",
  height: "60px",
  backgroundColor: "#ddd",
  margin: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
  color: "white",
};

const boardStyle = {
  backgroundColor: "#eee",
  width: "208px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  border: "3px #eee solid",
};

const containerStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

const instructionsStyle = {
  marginTop: "5px",
  marginBottom: "5px",
  fontWeight: "bold",
  fontSize: "16px",
};

const buttonStyle = {
  marginTop: "15px",
  marginBottom: "16px",
  width: "80px",
  height: "40px",
  backgroundColor: "#8acaca",
  color: "white",
  fontSize: "16px",
};

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}

function Square({ index, marker, setMarker, setArrayMatrix, arrayMatrix }) {
  const [showMarker, setShowMarker] = useState(false);
  const [markerCopy, setMarkerCopy] = useState('')

  let matrixCopy = arrayMatrix;
  matrixCopy[index[0]][index[1]] = markerCopy;

  return (
    <div
      className="square"
      style={squareStyle}
      onClick={() => {
        setMarkerCopy(showMarker ? markerCopy : marker)
        setShowMarker(true);
        setArrayMatrix(matrixCopy);
        setMarker(marker === "X" ? "O" : "X")
      }}
    >
      {showMarker ? <span>{markerCopy !== "" ? markerCopy : null}</span> : null}
    </div>
  );
}

function Board() {
  const [marker, setMarker] = useState("X");
  const [arrayMatrix, setArrayMatrix] = useState([[], [], []]);
  const [winner, setWinner] = useState('');

  useEffect(() => {
    let finalWinner = winDecider(arrayMatrix)

    if (finalWinner !== '') {
      setWinner(finalWinner);
    }

  }, [marker])


  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>
        Next player: <span>{marker}</span>
      </div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>
        Winner: <span>{winner !== '' ? winner : "none"}</span>
      </div>
      <button style={buttonStyle}>Reset</button>
      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
          <Square index={[0, 0]} marker={marker} setMarker={setMarker} setArrayMatrix={setArrayMatrix} arrayMatrix={arrayMatrix}/>
          <Square index={[0, 1]} marker={marker} setMarker={setMarker} setArrayMatrix={setArrayMatrix} arrayMatrix={arrayMatrix}/>
          <Square index={[0, 2]} marker={marker} setMarker={setMarker} setArrayMatrix={setArrayMatrix} arrayMatrix={arrayMatrix}/>
        </div>
        <div className="board-row" style={rowStyle}>
          <Square index={[1, 0]} marker={marker} setMarker={setMarker} setArrayMatrix={setArrayMatrix} arrayMatrix={arrayMatrix}/>
          <Square index={[1, 1]} marker={marker} setMarker={setMarker} setArrayMatrix={setArrayMatrix} arrayMatrix={arrayMatrix}/>
          <Square index={[1, 2]} marker={marker} setMarker={setMarker} setArrayMatrix={setArrayMatrix} arrayMatrix={arrayMatrix}/>
        </div>
        <div className="board-row" style={rowStyle}>
          <Square index={[2, 0]} marker={marker} setMarker={setMarker} setArrayMatrix={setArrayMatrix} arrayMatrix={arrayMatrix}/>
          <Square index={[2, 1]} marker={marker} setMarker={setMarker} setArrayMatrix={setArrayMatrix} arrayMatrix={arrayMatrix}/>
          <Square index={[2, 2]} marker={marker} setMarker={setMarker} setArrayMatrix={setArrayMatrix} arrayMatrix={arrayMatrix}/>
        </div>
      </div>
    </div>
  );
}

export default Game;
