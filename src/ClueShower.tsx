import {Puzzle} from "./Puzzle";


import Clue from "./Clue";
import {Alphabet} from "./acrosticData";
import {ReactNode} from "react";
import ClueDisplay from "./ClueDisplay";
import {PuzzleHolder} from "./Holders";

function ClueShower(props: PuzzleHolder ) {
    let puzzle: Puzzle = props.puzzle;
    let clues: Map<string,Clue> = puzzle.clues;
    let keys: string[] = Alphabet;

    let inner: ReactNode[] = [];


    for(let i = 0; i < clues.size; i++) {
        let letter: string = keys[i];
        let x  = clues.get(letter);
           inner.push(ClueDisplay(puzzle,letter,(x as Clue) ));
    }

 //   let identifier: string  = " <!-- ClueShower.tsx -->";

    return(
        <div className="ax-clue-bar container focused">
            <ol>
                {inner}
            </ol>
        </div>
   );
}

export default ClueShower;