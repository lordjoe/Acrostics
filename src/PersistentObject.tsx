import {GameState} from "./GameState";
import {Puzzle} from "./Puzzle";
import {readDefaultData} from "./acrosticData";

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
           if(this.puzzleHolder === undefined) {
               this.puzzleHolder = readDefaultData();
      //       alert("reading puzzle");
     //        console.log("reading puzzle");
         }
         return  this.puzzleHolder as Puzzle;
     }

      getGameState() : GameState {
         if(this.gsHolder === undefined) {
             this.gsHolder = new GameState();
      //       alert("reading GameState");
      //       console.log("reading GameState");
         }
         return  this.gsHolder as GameState;
     }

}

export default PersistentObject;