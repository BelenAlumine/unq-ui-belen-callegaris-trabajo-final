import { useState } from "react";
import Timer from "../components/Timer";
import WordInput from "../components/WordInput";
import Score from "../components/Score";
import GameOver from "../components/GameOver"
import "../styles/styles.css";

const Game = () => {
  const [turn, setTurn] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const handleWordSuccess = (wordFromInput) => {
    setTurn((prevTurn) => prevTurn + 1);    
    setScore(prevScore => prevScore + wordFromInput.length);
  }

  const handleTimeUp = () => {
    setGameOver(true);
  }

  const handleRestartGame = () => {
    setScore(0);
    setTurn(0);
    setGameOver(false);
  }

  return (
    <div>
      <div className="game-box">
        <div className="timer">
          {!gameOver && <Timer turn={turn} onTimeUp={handleTimeUp} maxSeconds={15} />}
        </div>
        <div className="score">
          <Score points={score}/>
        </div>
        <h1 className="game-title">PALABRAS ENCADENADAS</h1>
        <WordInput onValidWord={handleWordSuccess} isDisable={gameOver} />    
      </div>
      <GameOver 
        isOpen={gameOver}
        finalScore={score}
        onRestart={handleRestartGame}
      />
    </div>
  );
};


export default Game;