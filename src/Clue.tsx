import Cell from "./Cell";
import {Puzzle} from "./Puzzle";
import ClueJSON from "./ClueJSON";
import AnswerCell from "./AnswerCell";

class Clue {
    get cells(): AnswerCell[] {
        return this._cells;
    }

    set cells(value: AnswerCell[]) {
        this._cells = value;
    }

    letter: string;
    hint: string;
    answer: string;
    private _cells: AnswerCell[];

    parent: Puzzle;

    constructor(parent: Puzzle, letter: string, hint: string, answer: string, cells: number[]) {
        this.hint = hint;
        this.letter = letter;
        this.answer = answer;
        this.parent = parent;
        let items: AnswerCell[] = [];
        for (let i = 0; i < cells.length; i++) {
            items[i] = parent.getCell(cells[i]);
        }
        this._cells = items;
    }

    public getCell(i: number): Cell {
        return this._cells[i];
    }

    public isValid(): boolean {
        if (!this.isValidAnswer())
            return false;
        return true;
    }

    public asPuzzleAnswer() : string {
        let ret: string = "";
        for (let i: number = 0; i < this.answer.length; i++) {
            let c: string = this.answer.charAt(i).toUpperCase();
            if(c  >= 'A' && c <= 'Z')
                ret += c;
        }

        return ret;
    }

    public isValidAnswer(): boolean {
        let realAnswer: string = this.parent.getClueString(this.cells);
        let goodAnswer = this.asPuzzleAnswer();
        return realAnswer === goodAnswer;
    }

    public asClueJSON(): ClueJSON {
        let ret: ClueJSON = new ClueJSON();
        ret.hint = this.hint;
        ret.answer = this.answer;
        let s: string = "";
        for (let i = 0; i < this._cells.length; i++) {
            let j = this._cells[i].index;
            ret.cells[i] = j;
            s += this.parent.letters[j - 1];
        }
        ret.answer = s;
        return ret;
    }

    public hasCell(focused: AnswerCell) {
        for (let i = 0; i < this._cells.length; i++) {
            if(focused === this._cells[i])
                return true;
          }
        return false;
    }
}

export default Clue;