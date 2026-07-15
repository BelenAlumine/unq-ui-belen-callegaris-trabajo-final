import { createContext, useState, useContext } from "react";
import { validateWord } from '../service/apiService'

const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [wordList, setWordList] = useState([]);
    const [score, setScore] = useState(0);
    const [turn, setTurn] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const [playerName, setPlayerNameState] = useState(() => {
        return localStorage.getItem("playerName") || "";
    });

    const lastWord = wordList[wordList.length - 1] || "";

    const handleWordSubmit = async (word) => {
        const cleanWord = clearWord(word.trim().toLowerCase());

        if (isSubmitting) return { success: false, error: "..."}

        if (!cleanWord || gameOver) return { success: false, error: "JUEGO TERMINADO" };

        if (wordList.includes(cleanWord)) return { success: false, error: "PALABRA REPETIDA" } 

        if (lastWord) {
            const initial = lastWord.slice(-1);
            if (!cleanWord.startsWith(initial)) return { success: false, error: `DEBE INICIAR EN '${initial}'` }
        }
        try {
            setIsSubmitting(true);
            const data = await validateWord(cleanWord);
            console.log("data:::", data);

            if (data.exists === true) {
                setWordList((prev) => [...prev, cleanWord]);
                setScore((prev) => prev + cleanWord.length);
                setTurn((prev) => prev + 1);
                return { success: true };
            }
            return { success: false, error: "PALABRA INVÁLIDA" } 
        } catch {
            return { success: false, error: "HUBO UN ERROR. VUELVA A INTENTAR." };
        } finally {
            setIsSubmitting(false);
        }  
    };

    const restartGame = () => {
        setWordList([]);
        setScore(0);
        setTurn(0);
        setGameOver(false);
    };

    const endGame = () => setGameOver(true);

    const clearWord = (word) => {
        return word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };

    const setPlayerName = (name) => {
        localStorage.key(name);
        localStorage.setItem("playerName", name);
    };

    const clearPlayerName = () => {
        setPlayerName("");
        localStorage.removeItem("playerName");
    };

    const saveScore = (score, words) => {
        const leaderBoard = JSON.parse(localStorage.getItem("leaderBoard")) || [];
        leaderBoard.push({
            name: playerName,
            score,
            words
        })
        leaderBoard.sort((a, b) => b.score -a.score);
        const topTen = leaderBoard.slice(0, 10);
        localStorage.setItem("leaderBoard", JSON.stringify(topTen));
    };

    const getLeaderBoard = () => {
        return JSON.parse(localStorage.getItem("leaderBoard")) || [];
    };

    return (
        <GameContext.Provider
            value={{
                wordList,
                score,
                turn,
                gameOver,
                lastWord,
                isSubmitting,
                handleWordSubmit,
                endGame,
                restartGame,
                playerName, 
                setPlayerName, 
                clearPlayerName,
                saveScore, 
                getLeaderBoard
            }}
        >
            {children}
        </GameContext.Provider>
    );
};

export const useGame = () => useContext(GameContext);