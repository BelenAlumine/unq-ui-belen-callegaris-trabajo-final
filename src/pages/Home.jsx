import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import { useLeaderboard } from '../context/LeaderboardContext';
import RetroInput from '../components/RetroInput';
import RetroButton from '../components/RetroButton';
import '../styles/game.css';
import '../styles/wordInput.css';

const Home = () => {
    const { restartGame } = useGame();
    const { playerName, setPlayerName } = useLeaderboard();
    const [inputValue, setInputValue] = useState(playerName);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        const cleanName = inputValue.trim();

        if (!cleanName) {
            setError("INGRESA UN NOMBRE");
            return;
        }

        setPlayerName(cleanName);
        restartGame();
        navigate('/game');
    };

    return (
        <div className="game-box">
            <h1 className="game-title">
                PALABRAS ENCADENADAS
            </h1>

            <p className="game-instruction">
                INGRESA TU NOMBRE PARA JUGAR
            </p>

            <div className="word-input-container">
                <RetroInput
                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(e.target.value);
                        if (error) setError("");
                    }}
                    placeholder="TU NOMBRE"
                    error={error}
                    autoFocus
                    maxLength={7}
                />
            </div>

            <RetroButton onClick={handleSubmit}>
                JUGAR
            </RetroButton>
        </div>
    );
};

export default Home;
