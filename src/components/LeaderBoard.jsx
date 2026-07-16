import { useLeaderboard } from '../context/LeaderboardContext';
import "../styles/leaderboard.css";

const RANK_CLASSES = ['rank-1', 'rank-2', 'rank-3'];

const Leaderboard = ({ isOpen, onClose }) => {
    const { getLeaderBoard, playerName } = useLeaderboard();

    if (!isOpen) return null;

    const leaderboard = getLeaderBoard();

    return (
        <div className='modal-backdrop'>
            <div className='modal-content leaderboard-content'>
                <button className='modal-close' onClick={onClose}>X</button>
                <h2 className='leaderboard-title'>MEJORES PUNTAJES</h2>
                <hr className='retro-hr' />
                <div className='leaderboard-list'>
                    <div className='leaderboard-header'>
                        <span className='col-rank'></span>
                        <span className='col-name'>JUGADOR</span>
                        <span className='col-score'>PUNTOS</span>
                        <span className='col-words'>PALABRAS</span>
                    </div>
                    {leaderboard.map((entry, index) => (
                        <div
                            key={index}
                            className={`leaderboard-item ${entry.name === playerName ? 'player-row' : ''}`}
                        >
                            <span
                                className={`col-rank rank ${RANK_CLASSES[index] || ''}`}
                            >
                                {index + 1}.
                            </span>
                            <span className='col-name'>{entry.name}</span>
                            <span className='col-score'>{entry.score}</span>
                            <span className='col-words'>{entry.words}</span>
                        </div>
                    ))}
                </div>
                <hr className='retro-hr' />
            </div>
        </div>
    );
};

export default Leaderboard;
