import {Puzzle} from "./Puzzle";
import Clue from "./Clue";
import AnswerCell from "./AnswerCell";

export  interface PuzzleHolder {
    puzzle: Puzzle;

 //   ref: React.MutableRefObject<() => void>
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

export  interface PuzzleIndexHolder {
    puzzle: Puzzle;
    key:number;
    index: number;
 }