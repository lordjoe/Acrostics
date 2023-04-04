import AnswerCell from "./AnswerCell";
import Clue from "./Clue";
import Cell from "./Cell";
import {readDefaultData} from "./acrosticData";



export const regex: RegExp = /[a-zA-Z]/g;
export function isLetter(s: string): boolean {
    if (s.length === 0)
        return false;
    let f = s.charAt(0);
    if (f.match(regex))
        return true;
    else
        return false
}


let thePuzzle : Puzzle | undefined;

export function getPuzzle() : Puzzle {
    if(thePuzzle === undefined)
        thePuzzle = readDefaultData();
    return thePuzzle;
}

export class Puzzle {
    answer: string;
    author: string;
    book: string;
    letters: AnswerCell[];
    clues: Map<string,Clue>;
    source: AnswerCell[];

    date: Date;


    focused: AnswerCell | undefined;


    static  buildPuzzle() : Puzzle{
        return new Puzzle();
    }
    constructor() {
        this.answer = '';
        this.author = '';
        this.book = '';
        this.date = new Date();
        let lettersx: AnswerCell[] = [];
        this.letters = lettersx;
        let cluesx = new Map<string,Clue>();
        this.clues = cluesx;
        this.source = lettersx;
    }


    public setFocused(ans: AnswerCell | undefined  ) {
        if(this.focused === ans)
            return;
        let oldFocus = this.focused;
        this.focused = ans;
    }

    public getFocusedClue():  Clue | undefined {
       if(this.focused === undefined)
           return undefined;
        // @ts-ignore
        for (const [_, cx] of this.clues.entries()){
            let cl: Clue = cx as Clue;
            if(cl.hasCell(this.focused))
                return cl;
        }
    }
     public getMappedClue(k: string,parent:  Puzzle ) : Clue {
        let item: any  = this.clues.get(k);

        let ret: Clue =  this.buildClue(item,parent);
        return ret;
     }

    public buildClue(k: Object,parent:  Puzzle) : Clue {
        let hint:string = "";
        let answer:string = "";
        let letter:string = "";
        let cells: number[] = [];
        let item = new Clue(parent,letter, hint,answer,cells);
        return item;
    }

    public blackCell() : Cell {
        return new Cell(0);
    }
    public  getGridCells() : Cell[] {
        let lastIsLetter: boolean = false;
         let answer: string = this.answer;
        let index:number = 1;
        let ret: Cell[] = [];
        for(let i: number = 0; i < answer.length; i++ ) {
            let c: string = answer.charAt(i).toUpperCase();
            if(c >= 'A' && c <= 'Z') {
                ret.push(this.getCell(index++));
                lastIsLetter = true;
            }
            else {
               if(lastIsLetter) {
                   ret.push(this.blackCell());
                   lastIsLetter = false;
               }
            }
        }
        return ret;
    }

    public isValid() : boolean
    {
        let answer = true;
        this.clues.forEach((value: Clue, key: string) => {
            console.log(key + " = " + value.hint + "=" + value.answer);
            if(!value.isValid())
                answer = false;
        });
        return answer;
    }

    public setAnswer(answer: string) {
        this.answer = answer;
        let answerIndex: number = 1;
        let items: AnswerCell[] = [];
        for (let i = 0; i < answer.length; i++) {
            let x: string = answer.charAt(i);
            if (isLetter(x)) {
                let cl: AnswerCell = new AnswerCell(answerIndex, x.toUpperCase());
                if(Math.random() < 0.2)
                    cl.setGuess(x.toUpperCase());
                items.push(cl);
                // Fix later
                if(answerIndex ===1)
                    this.setFocused(cl);
                answerIndex++;
            }
        }
        this.letters = items;
    }


    public getCell(i: number): AnswerCell {
        return this.letters[i - 1];
    }

    public getSource(): AnswerCell[] {
        return this.source;
    }

    public addSourceCell(c: AnswerCell)  {
        this.source.push(c);
    }

    public getSourceString() : string {
        let ret: string = "";
        for (var i = 0; i < this.source.length; i++) {
            var cell = this.source[i];
            ret += this.getCell(cell.index).answer;
        }
        return ret;

    }

    public addClue(index: string,c: Clue): void {
        this.clues.set(index,c);
    }

    public getClueString(cells: Cell[]): string {
        let ret: string = "";
        for (var i = 0; i < cells.length; i++) {
            var cell = cells[i];
            ret += this.getCell(cell.index).answer;
        }
        return ret;
    }

}
