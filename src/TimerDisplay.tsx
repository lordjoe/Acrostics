import React, {useEffect, useState} from 'react';
import PersistentObject from "./PersistentObject";

function TimerDisplay() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 5);
            PersistentObject.getInstance().getGameState().durationSeconds = seconds;
        }, 5000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const formatTime = (totalSeconds: number): string => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds - hours * 3600) / 60);
        const remainingSeconds = totalSeconds % 60;

        const pad = (num: number): string => String(num).padStart(2, '0');

        return `${pad(hours)}:${pad(minutes)}:${pad(remainingSeconds)}`;
    };

    return (
        <p>{formatTime(seconds)}</p>
    );
}

export default TimerDisplay;