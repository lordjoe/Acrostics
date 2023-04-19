import Cell from "./Cell";
import {Puzzle} from "./Puzzle";
import ClueJSON from "./ClueJSON";
import AnswerCell from "./AnswerCell";
import {GameState} from "./GameState";
import PersistentObject from "./PersistentObject";


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

    private gs: GameState = PersistentObject.getInstance().getGameState();
    parent: Puzzle;

    constructor(parent: Puzzle, letter: string, hint: string, answer: string, cells: number[]) {
        this.hint = hint;
        this.letter = letter;
        this.answer = answer;
        this.parent = parent;
        let items: AnswerCell[] = [];
           for (let i = 0; i < cells.length; i++) {
            let index:number = cells[i];
              items[i] = (parent.getCell(index) as AnswerCell);
              this.gs.registerClueCell(index,this );
        }
        this._cells = items;
           if(letter ==="A")
               this.gs.theActiveClue = this;
    }

    public getCell(i: number): Cell {
        return this._cells[i];
    }

    public nextCell(index : number) : number
    {
        for (let i = 0; i < this._cells.length; i++) {
            if(index === this._cells[i].index) {
                if(i >= this._cells.length - 1)
                    return index;
                return this._cells[i + 1].index;
            }
        }
        return index;
    }

    public prevCell(index : number) : number
    {
        for (let i = this._cells.length - 1; i >= 0; i--) {
            if(index === this._cells[i].index) {
                if(i === 0)
                    return index;
                return this._cells[i - 1].index;;
            }
        }
        return index;
    }


    public isAllFilledIn() : boolean {
        for (const cell of this._cells) {
            if(!cell.isFilledIn())
                return false;
        }
        return true;
    }

    public isCorrect() : boolean {
        for (const cell of this._cells) {
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