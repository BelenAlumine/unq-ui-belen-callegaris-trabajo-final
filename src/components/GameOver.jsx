import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLeaderboard } from "../context/LeaderboardContext";
import LeaderBoard from "./LeaderBoard";
import RetroButton from "./RetroButton";
import "../styles/gameOver.css";
import "../styles/trophy.css";

const GameOver = ({ isOpen, finalScore, finalWords }) => {
    const navigate = useNavigate();
    const { saveScore } = useLeaderboard();
    const [showLeaderboard, setShowLeaderboard] = useState(false);

    useEffect(() => {
        if (isOpen) {
            saveScore(finalScore, finalWords);
        }
    }, [isOpen, finalScore, finalWords, saveScore]);

    if (!isOpen) return null;

    return (
        <div className='modal-backdrop'>
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
                <RetroButton onClick={() => navigate('/')}>
                    JUGAR DE NUEVO
                </RetroButton>
                <div className="trophy-section">
                    <button className="trophy-button" onClick={() => setShowLeaderboard(true)}>
                        <div className="pixel-trophy"></div>
                    </button>
                </div>
            </div>
            <LeaderBoard isOpen={showLeaderboard} onClose={() => setShowLeaderboard(false)} />
        </div>
    )
}

export default GameOver;
