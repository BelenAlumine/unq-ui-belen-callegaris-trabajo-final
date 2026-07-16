import { useState } from 'react';
import { useGame } from '../context/GameContext';
import Timer from "../components/Timer";
import WordInput from "../components/WordInput";
import Score from "../components/Score";
import GameOver from "../components/GameOver"
import "../styles/game.css";
import "../styles/timer.css";
import "../styles/score.css";

const Game = () => {
  const { turn, score, gameOver, endGame, restartGame, lastWord, wordList } = useGame();
  const [isWarning, setIsWarning] = useState(false);

  const listOfWords = () => {
    if (!wordList || wordList.length === 0) return ""
    else return `[${wordList.join(', ')}]`;
  }

  return (
    <div>
      <div className="game-box">

        <div className="timer">
          {!gameOver &&
            <Timer
              turn={turn}
              onTimeUp={endGame}
              maxSeconds={15}
              onSecondsLeft={(s) => setIsWarning(s <= 5)}
            />}
        </div>

        <div className="score">
          <Score points={score} />
        </div>

        <h1 className="game-title">PALABRAS ENCADENADAS</h1>

        <p className='initial'>{lastWord.slice(-1).toUpperCase()}...</p> {/* inicial sig palabra */}

        <WordInput key={turn} />
        {wordList.length === 0
          ? <p className='game-instruction'>[PRESIONE ENTER PARA JUGAR]</p>
          : <p className="word-list">{listOfWords()}</p>
        }

      </div>

      <GameOver
        isOpen={gameOver}
        finalScore={score}
        finalWords={wordList.length}
      />

      {isWarning && <div className='danger-overlay' />}

    </div>
  );
};


export default Game;