import { useEffect, useRef, useState } from 'react';
import '../styles/timer.css';


const Timer = ({ turn, onTimeUp, maxSeconds, onSecondsLeft }) => {
    const [seconds, setSeconds] = useState(maxSeconds);
    const [isRunning, setIsRunning] = useState(true);
    const intervalRef = useRef(null);

    useEffect(() => {
        onSecondsLeft(seconds);
    }, [seconds, onSecondsLeft]);

    useEffect(() => {
        if (seconds <= 0 && !isRunning) {
            onTimeUp();
        }
    }, [seconds, isRunning, onTimeUp]);

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setSeconds((prevSeconds) => {
                    if (prevSeconds <= 1) {
                        clearInterval(intervalRef.current);
                        setIsRunning(false);
                        return 0;
                    }
                    return prevSeconds - 1;
                });
            }, 1000);
        } else {
            clearInterval(intervalRef.current);
        }

        return () => clearInterval(intervalRef.current);
    }, [isRunning, onTimeUp]);

    useEffect(() => {
        setSeconds(maxSeconds);
        setIsRunning(true);
    }, [turn, maxSeconds]);

    const formatTime = (time) => {
        return `${String(time).padStart(2, '0')}`;
    };

    return (
        <h1 className={`timer ${seconds <= 5 ? 'timer-warning' : ''}`}>{formatTime(seconds)}</h1>
    );
};

export default Timer;