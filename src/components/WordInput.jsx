import { useState } from "react";
import { validateWord } from "../service/apiService";

const WordInput = ({ onValidWord, isDisable }) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const cleanWord = inputValue.trim();

        if (!cleanWord || isDisable) return;

        try {
            const data = await validateWord(cleanWord);
            console.log("data:::", data);

            if (data) {
                onValidWord(cleanWord);
                setInputValue("");
            }
        } catch (error) {
            console.error(error);
            // TODO: toast.error("Error inesperado, vuelva a intentar.");
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit} className="game-input">
                <input
                    type="text"
                    placeholder=""
                    value={inputValue}
                    disabled={isDisable}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </form>
        </div>
    );
}

export default WordInput;