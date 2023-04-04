import {Puzzle} from "./Puzzle";
import Clue from "./Clue";
import AnswerCell from "./AnswerCell";

export  interface PuzzleHolder {
    puzzle: Puzzle;
 }

export  interface PuzzleClueHolder {
    puzzle: Puzzle;
    clue: Clue;

}

export  interface PuzzleCellHolder {
    key:number;
    puzzle: Puzzle;
    cell: AnswerCell;

}