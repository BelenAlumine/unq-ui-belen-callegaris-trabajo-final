import { useState } from "react";
import { useGame } from "../context/GameContext";
import '../styles/wordInput.css';

const WordInput = ({ isDisable }) => {
    const [inputValue, setInputValue] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const { handleWordSubmit, gameOver } = useGame();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const cleanWord = inputValue.trim();

        if (!cleanWord || isDisable) return;
        setErrorMsg("");

        const result = await handleWordSubmit(cleanWord);

        if (result.success) setInputValue("");
        else setErrorMsg(result.error);
    };

    return (
        <div className="word-input-container">
            <form onSubmit={handleSubmit} className="game-form">
                <input
                    type="text"
                    placeholder="INGRESA UNA PALABRA"
                    value={inputValue}
                    disabled={gameOver}
                    autoFocus
                    onChange={(e) => {
                            setInputValue(e.target.value);
                            if (errorMsg) setErrorMsg("");
                        }
                    }
                    className={`game-input ${errorMsg ? 'has-error' : ''}`}
                />
            </form>
            {errorMsg && <p className="error-msg">{errorMsg}</p>}
        </div>
    );
}

export default WordInput;