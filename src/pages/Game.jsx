import { useState } from "react";
import Timer from "../components/Timer";
import WordInput from "../components/WordInput";
import "../styles/styles.css";

const Game = () => {
  const [turn, setTurn] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleWordSuccess = () => {
    setTurn((prevTurn) => prevTurn + 1);
  }

  const handleTimeUp = () => {
    setGameOver(true);
    alert("Perdiste"); //TODO: reemplazar por página/modal de juego terminado con puntos
  }

  return (
    <div>
      <div className="timer">
        {!gameOver && <Timer turn={turn} onTimeUp={handleTimeUp} maxSeconds={15} />}
      </div>
      <div className="game-box">
        <h1 className="game-title">Palabras encadenadas</h1>
        <WordInput onValidWord={handleWordSuccess} isDisable={gameOver} />    
      </div>
    </div>
  );
};


export default Game;