import '../styles/generalStyles.css';

const RetroInput = ({ value, onChange, placeholder, error, autoFocus, disabled, onSubmit, maxLength }) => {
    return (
        <div>
            <form
                className="game-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    if (onSubmit) onSubmit();
                }}
            >
                <input
                    type="text"
                    className={`game-input ${error ? 'has-error' : ''}`}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    autoFocus={autoFocus}
                    disabled={disabled}
                    maxLength={maxLength}
                />
            </form>
            {error && <p className="error-msg">{error}</p>}
        </div>
    );
};

export default RetroInput;
