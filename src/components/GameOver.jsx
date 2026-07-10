import React from 'react';
import "../styles/gameOver.css"

const GameOver = ({ isOpen, finalScore, onRestart }) => {
    if (!isOpen) return null;

    return (
        <div className='modal-container'>
            <div className='modal-content'>
                <h2 className='modal-title'>
                    JUEGO TERMINADO
                </h2>
                <div className='modal-stats'>
                    <p>PUNTOS</p>
                    <p className='final-score'>{finalScore}</p>
                </div>
                <button className='restart-button' onClick={onRestart}>
                    JUGAR DE NUEVO
                </button>
            </div>
        </div>
    )
}

export default GameOver;