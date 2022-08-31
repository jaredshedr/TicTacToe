import React, { useState } from "react";

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

function Square({ marker, setMarker }) {
  const [showMarker, setShowMarker] = useState(false);
  const [markerCopy, setMarkerCopy] = useState('')
  return (
    <div
      className="square"
      style={squareStyle}
      onClick={() => {
        setMarkerCopy(showMarker ? markerCopy : marker)
        setShowMarker(true);
        setMarker(marker === "X" ? "O" : "X")
      }}
    >
      {showMarker ? <span>{markerCopy !== "" ? markerCopy : null}</span> : null}
    </div>
  );
}

function Board() {
  const [marker, setMarker] = useState("X");

  function markerSwap() {}

  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>
        Next player: <span>{marker}</span>
      </div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>
        Winner: <span>None</span>
      </div>
      <button style={buttonStyle}>Reset</button>
      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
          <Square marker={marker} setMarker={setMarker}/>
          <Square marker={marker} setMarker={setMarker}/>
          <Square marker={marker} setMarker={setMarker}/>
        </div>
        <div className="board-row" style={rowStyle}>
          <Square marker={marker} setMarker={setMarker}/>
          <Square marker={marker} setMarker={setMarker}/>
          <Square marker={marker} setMarker={setMarker}/>
        </div>
        <div className="board-row" style={rowStyle}>
          <Square marker={marker} setMarker={setMarker}/>
          <Square marker={marker} setMarker={setMarker}/>
          <Square marker={marker} setMarker={setMarker}/>
        </div>
      </div>
    </div>
  );
}

export default Game;
