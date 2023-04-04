import {getPuzzle, Puzzle} from "./Puzzle";
import React from "react";


let theGameState: GameState | undefined;

export function getGameState(): GameState {
    if (theGameState === undefined)
        theGameState = new GameState(getPuzzle());
    return theGameState;
}

export class GameState {
    puzzle: Puzzle;
    timerShower: React.ReactNode[] = [];



    constructor(puzzle: Puzzle) {
        this.puzzle = puzzle;
    }

    public addTimerComponent(added: React.ReactNode) {
        this.timerShower.push(added);
    }
}