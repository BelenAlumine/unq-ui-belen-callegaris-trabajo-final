import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';
import '../styles/game.css';
import '../styles/gameOver.css';
import '../styles/wordInput.css';
//import '../styles/home.css';

const Home = () => {
    const { playerName, setPlayerName, restartGame } = useGame();
    const [inputValue, setInputValue] = useState(playerName);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
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

            <form onSubmit={handleSubmit} className="game-form">
                <input
                    type="text"
                    className={`game-input home-input`}
                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(e.target.value);
                        if (error) setError("");
                    }}
                    placeholder="TU NOMBRE"
                    autoFocus
                />
            </form>

            {error && <p className="error-msg">{error}</p>}

            <button className="restart-button" onClick={handleSubmit}>
                JUGAR
            </button>
        </div>
    );
};

export default Home;