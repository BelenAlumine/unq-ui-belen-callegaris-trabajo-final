import '../styles/score.css';

const Score = ({ points }) => {
    return (
        <div >
            <h1 className="score">{points}</h1>
        </div>
    );
}

export default Score;