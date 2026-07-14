import { useEffect, useRef, useState } from 'react';
import '../styles/timer.css';


const Timer = ({ turn, onTimeUp, maxSeconds }) => {
    const [seconds, setSeconds] = useState(maxSeconds);
    const [isRunning, setIsRunning] = useState(true);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setSeconds((prevSeconds) => {
                    if (prevSeconds <= 1) {
                        clearInterval(intervalRef.current);
                        setIsRunning(false);
                        onTimeUp();
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
        <div className='container'>
            <h1 className='timer'>{formatTime(seconds)}</h1>
        </div>
    );
};

export default Timer;