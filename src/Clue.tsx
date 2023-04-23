import Cell from "./Cell";
import {Puzzle} from "./Puzzle";
import ClueJSON from "./ClueJSON";
import AnswerCell from "./AnswerCell";
import {GameState} from "./GameState";
import PersistentObject from "./PersistentObject";
import answerCell from "./AnswerCell";


class Clue {


    letter: string;
    hint: string;
    answer: string;
    private _cells: number[] = [];

      parent: Puzzle;

    constructor(parent: Puzzle, letter: string, hint: string, answer: string, cells: number[]) {
        this.hint = hint;
        this.letter = letter;
        this.answer = answer;
        this.parent = parent;
   //     let items: AnswerCell[] = [];
           for (let i = 0; i < cells.length; i++) {
            let index:number = cells[i];
            parent.clueCell.set(index,letter);
//              let c: AnswerCell = (parent.getCell(index) as AnswerCell);
              this._cells.push(index);

        }
   //     this._cells = items;
       }

    public getCell(i: number): number {
        return this._cells[i];
    }

    public hasCell(index :number) {
        for (let i = 0; i < this._cells.length; i++) {
            if (index === this._cells[i])
                return true;
        }
        return false;
    }


    public getCells() {
        return  this._cells;
    }

    public nextCell(index : number) : number
    {
        for (let i = 0; i < this._cells.length; i++) {
            if(index === this._cells[i] ) {
                if(i >= this._cells.length - 1)
                    return index;
                return this._cells[i + 1] ;
            }
        }
        return index;
    }

    public prevCell(index : number) : number
    {
        for (let i = this._cells.length - 1; i >= 0; i--) {
            if(index === this._cells[i] ) {
                if(i === 0)
                    return index;
                return this._cells[i - 1] ;
            }
        }
        return index;
    }


    public isAllFilledIn() : boolean {
        for (const cx of this._cells) {
            let cell: AnswerCell = this.parent.getCell(cx)  as AnswerCell;
            if(!cell.isFilledIn())
                return false;
        }
        return true;
    }

    public isCorrect() : boolean {
        for (const cx of this._cells) {
            let cell: AnswerCell = this.parent.getCell(cx)  as AnswerCell;
            if(!cell.isCorrect())
                return false;
        }
        return true;
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
        let realAnswer: string = this.parent.getClueStringN(this._cells);
        let goodAnswer = this.asPuzzleAnswer();
        return realAnswer === goodAnswer;
    }

    public asClueJSON(): ClueJSON {
        let ret: ClueJSON = new ClueJSON();
        ret.hint = this.hint;
        ret.answer = this.answer;
        let s: string = "";
        for (let i = 0; i < this._cells.length; i++) {
            let j = this._cells[i];
            ret.cells[i] = j;
            s += this.parent.letters[j - 1];
        }
        ret.answer = s;
        return ret;
    }

    // public hasCell(focused: AnswerCell) {
    //     for (let i = 0; i < this._cells.length; i++) {
    //         if(focused === this._cells[i])
    //             return true;
    //       }
    //     return false;
    // }
    public isComplete() : boolean {
        for (var i = 0; i < this._cells.length; i++) {
            var index: number = this._cells[i];
            let answer: string = (this.parent.getCell(index) as answerCell).getAnswer();
              if(answer.length != 1)
                  return false;
        }
        return true;
    }
}

export default Clue;