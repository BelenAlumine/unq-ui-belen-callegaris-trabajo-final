import { useGame } from '../context/GameContext';
import Timer from "../components/Timer";
import WordInput from "../components/WordInput";
import Score from "../components/Score";
import GameOver from "../components/GameOver"
import "../styles/styles.css";

const Game = () => {
  const { turn, score, gameOver, endGame, restartGame, lastWord, wordList } = useGame();

  const listOfWords = () => {
    if (!wordList || wordList.length === 0) return ""
    else return `[${wordList.join(', ')}]`;
  }

  return (
    <div>
      <div className="game-box">
        <div className="timer">
          {!gameOver && <Timer turn={turn} onTimeUp={endGame} maxSeconds={15} />}
        </div>
        <div className="score">
          <Score points={score}/>
        </div>
        <h1 className="game-title">PALABRAS ENCADENADAS</h1>
        <p>{lastWord.slice(-1)}</p>
        <WordInput />    
        <p className="word-list">{listOfWords()}</p>
      </div>
      <GameOver 
        isOpen={gameOver}
        finalScore={score}
        finalWords={wordList.length}
        onRestart={restartGame}
      />
    </div>
  );
};


export default Game;