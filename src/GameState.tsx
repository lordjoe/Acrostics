import {  Puzzle} from "./Puzzle";
import AnswerCell from "./AnswerCell";
import React   from "react";
import Clue from "./Clue";
import TimerDisplay from "./TimerDisplay";
import {NoArgsNoReturnFunction, NoArgsNumberReturnFunction} from "./Interfaces";

import PersistentObject from "./PersistentObject";


export type RedrawCallback = () => void;
export class GameState {
    puzzleX: Puzzle | undefined = undefined;

    redrawCallbacks: Map<string, NoArgsNoReturnFunction > = new Map<string, NoArgsNoReturnFunction >();
   forwardCellCallbacks: Map<string, NoArgsNumberReturnFunction > = new Map<string, NoArgsNumberReturnFunction >();
   backCellCallbacks: Map<string, NoArgsNumberReturnFunction > = new Map<string, NoArgsNumberReturnFunction >();


  //  cellCallbacks: Map<AnswerCell,Set<NoArgsNoReturnFunction>> = new Map<AnswerCell,Set<NoArgsNoReturnFunction>>();

    cellClue: Map<number,Clue> = new Map<number,Clue>();

    theActiveContainer: string  = "grid";
    theFocus: React.ReactNode | undefined  = undefined;
    theActiveCellX: number  = 0;

    theActiveClue: Clue | undefined  = undefined;


    durationSeconds = 0;

    private changeListeners: Map<number, Set<RedrawCallback>> = new Map();


     getActiveCell() : AnswerCell   {
         if(this.theActiveCellX === 0)
             return (this.puzzleX?.getCell(1) as AnswerCell);
         return (this.puzzleX?.getCell(this.theActiveCellX) as AnswerCell);
     }

    getActiveCellIndex() : number   {
        return this.theActiveCellX;
    }
     forwardCell() {
        if(this.theActiveContainer) {
            let func: NoArgsNumberReturnFunction | undefined = this.forwardCellCallbacks.get(this.theActiveContainer);
            if (func) {
                this.theActiveCellX = func();
            }
        }
    }

    backCell() {
        if(this.theActiveContainer) {
            let func: NoArgsNumberReturnFunction | undefined = this.backCellCallbacks.get(this.theActiveContainer);
            if (func) {
               this.setActiveCell(func());
            }
         }
    }

    setTest(test: string) {
           if (test.length !== 1)
            return;
        if (test >= "A" && test <= "Z") {
            this.setSelectedGuess(test);
            if(this.getSelectedGuess() === test) {
                this.checkPuzzle();
                this.forwardCell();
                this.doRedraw();
            }
            else {
                alert("guess did not take ");
            }
        }
    }

    registerChangeListener(changeId: number, callback: RedrawCallback): () => void {
        if (!this.changeListeners.has(changeId)) {
            this.changeListeners.set(changeId, new Set());
        }
        const callbacks = this.changeListeners.get(changeId);
        callbacks?.add(callback);

        // Return a function to unregister the listener
        return () => {
            callbacks?.delete(callback);
        };
    }

    triggerChange(changeId: number): void {
        const callbacks = this.changeListeners.get(changeId);
        callbacks?.forEach((callback) => callback());
    }



    public registerClueCell(index: number, clue: Clue)  {
        this.cellClue.set(index,clue);
    }





     public isSelectedClue(s: string) : boolean {
         if(this.theActiveClue)
             return s === this.theActiveClue.letter;
         else
             return false;
     }








    public revealOneCell() : AnswerCell
    {
        let puzzle: Puzzle = PersistentObject.getInstance().getPuzzle();
        if( puzzle.isAllFilledIn())
            return  puzzle.getCell(1) as AnswerCell;
        let cell : AnswerCell = puzzle.getRandomUnknownCell();
        this.setGuess(cell.getAnswer(),cell);
        return cell;
    }

    public reDrawPuzzle() {

    }


    public setActiveCell(index: number) {
          if(this.theActiveCellX === index)
            return;
      // eslint disable-next-line
         this.theActiveCellX = index;
        if(index > 0)
             this.theActiveClue = this.cellClue.get( index);
        else
            this.theActiveClue = undefined;
     }

     public doRedraw() {
         (this.redrawCallbacks.get("ClueShower") as NoArgsNoReturnFunction)();
         (this.redrawCallbacks.get("PuzzleGrid") as NoArgsNoReturnFunction)();
         (this.redrawCallbacks.get("CluesTableSection") as NoArgsNoReturnFunction)();
         (this.redrawCallbacks.get("AuthorTitleSection") as NoArgsNoReturnFunction)();

     }


    // focusableDivRef = useRef<HTMLDivElement | null>(null);

    public setFocus( focus: React.ReactNode ) {
        if(focus === this.theFocus)
            return;
        if(!this.theFocus) {
            this.clearFocus();
        }
        this.theFocus = focus;

    }

    public clearFocus() {

    }




    public setGuess(guess: string,cell: AnswerCell) {
        cell.setGuess(guess);
        this.doRedraw();

    }

    public setSelectedGuess(guess: string) : void
    {
        if(this.theActiveCellX > 0) {
            let pzl: Puzzle = PersistentObject.getInstance().getPuzzle();
            let clx: AnswerCell | undefined = pzl.getCell(this.theActiveCellX) ;
   //          alert(" activecell " + this.theActiveCell + " set to " + guess);
            if(clx) {
                clx.setGuess(guess);
            }
            else {
                alert(" activecell " + this.theActiveCellX);
            }
           }
    }

    public getSelectedGuess() : string
    {
        if(this.theActiveCellX > 0) {
            let pzl: Puzzle = PersistentObject.getInstance().getPuzzle();
            let clx: AnswerCell | undefined = pzl.getCell(this.theActiveCellX) ;
            if(clx) {
               return clx.getGuess();
            }
            else {
               return "";
            }
        }
        return "";
    }


    isActive(ans: AnswerCell) {
        return this.theActiveCellX === ans.index;
    }

    selectedClue() : Clue | undefined {
        if(this.theActiveCellX > 0) {
            return this.cellClue.get(this.theActiveCellX  );
        }
        return undefined;
     }

      finishedWithErrors: boolean = false;
    checkPuzzle() {
        let puzzle: Puzzle = PersistentObject.getInstance().getPuzzle();
        if(puzzle.isAllFilledIn()) {
            if(puzzle.isCorrect())
                alert("Finished and Correct");
            else {
                if(!this.finishedWithErrors) {
                    alert("Finished with errors");
                    this.finishedWithErrors = true;
                }
            }

        }
    }

    eraseActiveCell() : void {
        if(this.theActiveCellX > 0) {
            let puzzle: Puzzle = PersistentObject.getInstance().getPuzzle();
            let myCell = puzzle.getCell(this.theActiveCellX  );
            myCell?.setGuess("");
        }

    }

    handleKeyboardEvent(e: React.KeyboardEvent) {
        if (e.key === "Backspace") {
             this.eraseActiveCell();
            this.backCell();
            this.doRedraw();
            return;
        }
        if (e.key === "ArrowLeft") {
            this.backCell();
            this.doRedraw();
            return;
        }
        if (e.key === "ArrowRight") {
            this.forwardCell();
            this.doRedraw();
            //      alert("active cell = " + gsx.theActiveCell + " container " + gsx.theActiveContainer);
            return;
        }
        let test = e.key.toUpperCase();
        this.setTest(test);
    }
}

