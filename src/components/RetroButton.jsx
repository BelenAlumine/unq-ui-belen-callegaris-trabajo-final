import '../styles/generalStyles.css';

const RetroButton = ({ children, onClick, className }) => {
    return (
        <button className={`retro-button ${className || ''}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default RetroButton;
