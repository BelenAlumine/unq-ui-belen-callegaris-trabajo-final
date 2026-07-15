import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGame } from "../context/GameContext"
import "../styles/gameOver.css"

const GameOver = ({ isOpen, finalScore, finalWords }) => {
    const navigate = useNavigate();
    const { saveScore } = useGame();

    useEffect(() => {
        if (isOpen) {
            saveScore(finalScore, finalWords);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className='modal-container'>
            <div className='modal-content'>
                <h2 className='modal-title'>
                    JUEGO TERMINADO
                </h2>
                <div className='modal-stats'>
                    <div>
                        <p>PUNTOS</p>
                        <p className='final-score'>{finalScore}</p>
                    </div>
                    <div>
                        <p>PALABRAS</p>
                        <p className='final-score'>{finalWords}</p>
                    </div>
                </div>
                {/*<button className='restart-button' onClick={onRestart}>*/}
                <button className='restart-button' onClick={() => navigate('/')}>
                    JUGAR DE NUEVO
                </button>
            </div>
        </div>
    )
}

export default GameOver;