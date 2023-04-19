import {Puzzle} from "./Puzzle";


import Clue from "./Clue";
import {Alphabet} from "./acrosticData";
import {ReactNode, useState} from "react";
import ClueDisplay from "./ClueDisplay";
import {PuzzleHolder} from "./Holders";
import {GameState } from "./GameState";
import PersistentObject from "./PersistentObject";

function ClueShower(props: PuzzleHolder ) {
    let puzzle: Puzzle = props.puzzle;
    let clues: Map<string,Clue> = puzzle.clues;
    let keys: string[] = Alphabet;
    let gs: GameState = PersistentObject.getInstance().getGameState();
     let inner: ReactNode[] = []

    const [doRedraw,setRedraw] = useState(false);
    function redraw() : void {
        setRedraw(!doRedraw);
    }

    gs.redrawCallbacks.set("ClueShower",redraw);


    for(let i = 0; i < clues.size; i++) {
        let letter: string = keys[i];
        let isSelected: boolean = gs.isSelectedClue(letter);
        let x  = clues.get(letter);
           inner.push(ClueDisplay(puzzle,letter,(x as Clue) ,isSelected));
    }

 //   let identifier: string  = " <!-- ClueShower.tsx -->";

    return(
        <div className="ax-clue-bar container focused">
            <ol key={"ClueShower"}>
                {inner}
            </ol>
        </div>
   );
}

export default ClueShower;