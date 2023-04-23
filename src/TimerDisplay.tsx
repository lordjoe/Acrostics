import React, {useEffect, useState} from 'react';
import PersistentObject from "./PersistentObject";
import {GameState} from "./GameState";

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
    let  gs: GameState = PersistentObject.getInstance().getGameState();
    let clue: string = "none";
    if(gs.theActiveClue)
        clue = gs.theActiveClue;

    return (
        <p>{formatTime(seconds)} Active Index { gs.getActiveCellIndex()} Clue {clue} {gs.theActiveContainer} </p>
    );
}

export default TimerDisplay;