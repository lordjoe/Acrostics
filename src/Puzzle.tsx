import AnswerCell from "./AnswerCell";
import Clue from "./Clue";
import Cell from "./Cell";
import answerCell from "./AnswerCell";




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








export class Puzzle {
    answer: string;
    author: string;
    book: string;
    letters: AnswerCell[];
    clues: Map<string,Clue>;
    source: number[];

    date: Date;


    focused: AnswerCell | undefined;

     static instance: Puzzle | undefined = undefined;
    static  buildPuzzle() : Puzzle{
        if(Puzzle.instance)
            return Puzzle.instance as Puzzle;
        else {
            Puzzle.instance = new Puzzle();
        }
        return Puzzle.instance as Puzzle;
    }
    private constructor() {
        this.answer = '';
        this.author = '';
        this.book = '';
        this.date = new Date();
          this.letters = [];
        let cluesx = new Map<string,Clue>();
        this.clues = cluesx;
        this.source = [];
    }


    public nextLetterCell(current: AnswerCell) : AnswerCell | undefined
    {
        if(!current)
            return undefined;
        if(current.index >= this.letters.length - 1)
            return undefined;
        return this.letters[current.index + 1];
    }

    public prevLetterCell(current: AnswerCell) : AnswerCell | undefined
    {
        if(!current)
            return undefined;
        if(current.index <= 0)
            return undefined;
        return this.letters[current.index - 1];
    }



    public isAllFilledIn() : boolean {
        for (const cell of this.letters) {
            if(!cell.isFilledIn())
                return false;
        }
        return true;
    }

    public isCorrect() : boolean {
        for (const cell of this.letters) {
            if(!cell.isCorrect())
                return false;
        }
        return true;
    }

    public setFocused(ans: AnswerCell | undefined  ) {
        if(this.focused === ans)
            return;
        // @ts-ignore
 //       let oldFocus = this.focused;
        this.focused = ans;
    }

    public getFocusedClue():  Clue | undefined {
       if(this.focused === undefined)
           return undefined;
        // @ts-ignore
        // eslint-disable-next-line
        for (const [clz, cx] of this.clues.entries()){
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
                ret.push((this.getCell(index++) as AnswerCell));
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

     fillProb: number = 0.0000000002;


    public setAnswer(answer: string) {
        this.answer = answer;
        let answerIndex: number = 1;
        let items: AnswerCell[] = [];
        for (let i = 0; i < answer.length; i++) {
            let x: string = answer.charAt(i);
            if (isLetter(x)) {
                let cl: AnswerCell = new AnswerCell(answerIndex, x.toUpperCase());
                if(Math.random() < this.fillProb)
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


    public getCell(i: number): AnswerCell | undefined {
        if(i <= 0 || i >this.letters.length)
            return undefined;
        return this.letters[i - 1];
    }

    public getSource(): number[] {
        return this.source;
    }

    public addSourceCell(c: AnswerCell)  {
        for (var i = 0; i < this.source.length; i++) {
            var cell: number = this.source[i];
            if(cell  === c.index)
                alert("bad added cell " + c.index);
        }
        this.source.push(c.index);
    }

    public getSourceString() : string {
        let ret: string = "";
        for (var i = 0; i < this.source.length; i++) {
            var cell : AnswerCell = (this.getCell(this.source[i]) as AnswerCell);
            ret += (this.getCell(cell.index) as AnswerCell).getAnswer();
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
            ret += (this.getCell(cell.index) as answerCell).getAnswer();
        }
        return ret;
    }

    getRandomUnknownCell() : AnswerCell {
        let ret: AnswerCell  = this.letters[0];
        if(this.isAllFilledIn())
            return ret;
        while(!ret.isFilledIn()) {
            ret = this.letters[Math.floor(Math.random() * this.letters.length)];
        }
        return ret;
    }

    getPreviousAuthorTitleIndex(as: number) : number {
        let src: number[] = this.source;
          for (let i = 1; i < src.length; i++) {
            if(as ===  src[i]) {
                 return src[i - 1];
            }
          }
        return src[0];
    }

    getNextAuthorTitleIndex(as: number) : number {
        let src: number[] = this.source;
        let next = src[src.length - 1];
        for (let i = 0; i < src.length - 1; i++) {
            if(as ===  src[i] )
                return src[i + 1];

        }
        return next;
    }

    getSourceCells() : AnswerCell[] {
        let ret: AnswerCell[] = [];
        let src: number[] = this.source;
        for (let i = 0; i < src.length - 1; i++) {
             ret.push((this.getCell(src[i]) as AnswerCell));
         }
        return ret;
    }
}
