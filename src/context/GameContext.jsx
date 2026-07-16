import { createContext, useState, useContext, useMemo, useCallback } from "react";
import { validateWord } from '../service/apiService.js';
import { validateSubmission } from '../utils/wordValidator';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [wordList, setWordList] = useState([]);
    const [score, setScore] = useState(0);
    const [turn, setTurn] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const lastWord = wordList[wordList.length - 1] || "";

    const handleWordSubmit = useCallback(async (word) => {
        const { cleanWord, valid, error } = validateSubmission(word, {
            lastWord,
            wordList,
            gameOver,
            isSubmitting,
        });

        if (!valid) return { success: false, error };

        try {
            setIsSubmitting(true);
            const data = await validateWord(cleanWord);

            if (data.exists === true) {
                setWordList((prev) => [...prev, cleanWord]);
                setScore((prev) => prev + cleanWord.length);
                setTurn((prev) => prev + 1);
                return { success: true };
            }
            return { success: false, error: "PALABRA INVÁLIDA" };
        } catch {
            return { success: false, error: "HUBO UN ERROR. VUELVA A INTENTAR." };
        } finally {
            setIsSubmitting(false);
        }
    }, [lastWord, wordList, gameOver, isSubmitting]);

    const restartGame = useCallback(() => {
        setWordList([]);
        setScore(0);
        setTurn(0);
        setGameOver(false);
    }, []);

    const endGame = useCallback(() => setGameOver(true), []);

    const value = useMemo(() => ({
        wordList,
        score,
        turn,
        gameOver,
        lastWord,
        isSubmitting,
        handleWordSubmit,
        endGame,
        restartGame,
    }), [wordList, score, turn, gameOver, lastWord, isSubmitting, handleWordSubmit, endGame, restartGame]);

    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    );
};

export const useGame = () => useContext(GameContext);
