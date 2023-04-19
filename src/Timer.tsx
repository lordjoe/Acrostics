import AnswerCell from "./AnswerCell";
import {readDefaultData} from "./acrosticData";
import {Puzzle} from "./Puzzle";


const getCurrentTime = (): number => {
    const date = new Date();
    return date.getTime();
};

let theTimer : Timer | undefined;

export function getTimer() : Timer {
    if(theTimer === undefined)
        theTimer = new Timer();
    return theTimer;
}

export class Timer {
    startTime: number = getCurrentTime() /1000;
    paused: boolean = false;

    public getElapsedTime() : number {
        return Math.round(getCurrentTime() / 1000 - this.startTime);
    }

    public getFormattedTime(): string {
        let elapsed: number = this.getElapsedTime();
        let ret: string = "";
        let hours = Math.round(elapsed / 3600);
        if(hours > 0)
            ret += hours + ":";
        let minutes = Math.round(elapsed /60);
        ret += minutes + ":";
        ret +=  Math.round(elapsed %60);

        return ret;
    }

}
