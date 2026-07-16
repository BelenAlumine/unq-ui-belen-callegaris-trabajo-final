import { createContext, useState, useContext, useMemo } from "react";
import { MOCK_SCORES } from "../constants/leaderboard";

const LeaderboardContext = createContext();

const STORAGE_KEY = "leaderBoard";
const NAME_KEY = "playerName";

const initLeaderboard = () => {
    if (!localStorage.getItem(STORAGE_KEY)) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(MOCK_SCORES));
    }
};

export const LeaderboardProvider = ({ children }) => {
    const [playerName, setPlayerNameState] = useState(() => {
        return localStorage.getItem(NAME_KEY) || "jugador";
    });

    const setPlayerName = (name) => {
        setPlayerNameState(name);
        localStorage.setItem(NAME_KEY, name);
    };

    const saveScore = (newScore, words) => {
        initLeaderboard();
        const leaderBoard = JSON.parse(localStorage.getItem(STORAGE_KEY));
        leaderBoard.push({ name: playerName, score: newScore, words });
        leaderBoard.sort((a, b) => b.score - a.score || a.words - b.words);
        const topTen = leaderBoard.slice(0, 10);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(topTen));
    };

    const getLeaderBoard = () => {
        initLeaderboard();
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    };

    const value = useMemo(() => ({
        playerName,
        setPlayerName,
        saveScore,
        getLeaderBoard,
    }), [playerName]);

    return (
        <LeaderboardContext.Provider value={value}>
            {children}
        </LeaderboardContext.Provider>
    );
};

export const useLeaderboard = () => useContext(LeaderboardContext);
