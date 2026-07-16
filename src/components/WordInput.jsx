import { useState } from "react";
import { useGame } from "../context/GameContext";
import RetroInput from "./RetroInput";
import '../styles/wordInput.css';

const WordInput = () => {
    const [inputValue, setInputValue] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const { handleWordSubmit, gameOver } = useGame();

    const handleSubmit = async () => {
        const cleanWord = inputValue.trim();

        if (!cleanWord) return;
        setErrorMsg("");

        const result = await handleWordSubmit(cleanWord);

        if (result.success) setInputValue("");
        else setErrorMsg(result.error);
    };

    return (
        <div className="word-input-container">
            <RetroInput
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value);
                    if (errorMsg) setErrorMsg("");
                }}
                placeholder="INGRESA UNA PALABRA"
                error={errorMsg}
                disabled={gameOver}
                autoFocus
                onSubmit={handleSubmit}
            />
        </div>
    );
}

export default WordInput;
