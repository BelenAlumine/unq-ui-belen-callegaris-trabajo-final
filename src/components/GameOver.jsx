import "../styles/gameOver.css"

const GameOver = ({ isOpen, finalScore, finalWords, onRestart }) => {
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
                        <p>{finalWords}</p>
                    </div>
                </div>
                <button className='restart-button' onClick={onRestart}>
                    JUGAR DE NUEVO
                </button>
            </div>
        </div>
    )
}

export default GameOver;