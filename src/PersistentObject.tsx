import {GameState} from "./GameState";
import {Puzzle} from "./Puzzle";


 class PersistentObject{
    private static instance: PersistentObject;
    private data: Record<string, unknown> = {};

    private constructor() {}

    public static getInstance(): PersistentObject {
        if (!PersistentObject.instance) {
            PersistentObject.instance = new PersistentObject();
        }
        return PersistentObject.instance;
    }
    puzzleHolder: Puzzle | undefined = undefined;
    gsHolder: GameState | undefined = undefined;

      getPuzzle() : Puzzle {
         //   if(this.puzzleHolder === undefined) {
         //       this.puzzleHolder = readDefaultData();
         //   alert("reading puzzle");
         //   console.log("reading puzzle");
         // }
         return  this.puzzleHolder as Puzzle;
     }

     hasPuzzle() : boolean {
         if(this.puzzleHolder === undefined)
             return false;
         return true;
     }
     setPuzzle(puz: Puzzle) {
         this.puzzleHolder = puz;
         this.gsHolder = new GameState();
      //   alert("setting puzzle");
     //    console.log("setting puzzle");
     }

      getGameState() : GameState {
         if(this.gsHolder === undefined) {
             this.gsHolder = new GameState();
      //       alert("reading GameState");
      //       console.log("reading GameState");
         }
         return  this.gsHolder as GameState;
     }

     static buildDate(dateStr: string | undefined) : Date {
         if(dateStr) {
             let items: string[] = dateStr.split("-");
             let year: number = parseInt(items[1]);
             let month: number = parseInt(items[2]) - 1;
             let day: number = parseInt(items[3]);

             return new Date(year,month,day);
         }
         else {
             return new Date();
         }
     }

     static stringFromDate(d: Date) :string {
         return d.toDateString();
     }
 }

export default PersistentObject;