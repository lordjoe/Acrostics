import React, {   useState } from 'react';
import PersistentObject from "./PersistentObject";





// function useEffect(() => {
//     let gs: GameState = getGameState();
//     let cell: AnswerCell = gs.revealOneCell();
//     console.log("changed cell " + cell.index);
//     const interval = setInterval(() => {
//         setSeconds((prevSeconds) => prevSeconds + 5);
//     }, 5000);
//     console.log("Time updated");
//
//     return () => {
//         clearInterval(interval);
//     };
// }, []);


function  TimerDisplay(  )   {
// eslint-disable-next-line
    const [seconds, setSeconds] = useState(0);

    PersistentObject.getInstance().getGameState().theTimeDisplay = this;

    const formatTime = (totalSeconds: number): string => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds - hours * 3600) / 60);
        const remainingSeconds = totalSeconds % 60;

        const pad = (num: number): string => String(num).padStart(2, '0');

        return `${pad(hours)}:${pad(minutes)}:${pad(remainingSeconds)}`;
    };

    return (
//        <div>
//            <h2>Time elapsed:</h2>
    <p>{formatTime(seconds)}</p>
 //   </div>
);
};

export default TimerDisplay;