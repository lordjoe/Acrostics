import {Puzzle} from "./Puzzle";
import Clue from "./Clue";
import {PuzzleHolder} from "./Holders";
import React, {ReactNode, useState} from "react";
import {Alphabet} from "./acrosticData";
import ClueTableDisplay from "./ClueTableDisplay";
import {GameState } from "./GameState";
import PersistentObject from "./PersistentObject";

function CluesTableSection(props: PuzzleHolder ) {
    let puzzle: Puzzle = props.puzzle;
    let clues: Map<string, Clue> = puzzle.clues;
    let gs: GameState = PersistentObject.getInstance().getGameState();


    // eslint-disable-next-line
    let [baseName,setSelected]= useState("clue-list container")


    let keys: string[] = Alphabet;
    let inner: ReactNode[] = [];
    for(let i = 0; i < clues.size; i++) {
        let letter: string = keys[i];
        let x  = clues.get(letter);
        inner.push(ClueTableDisplay(puzzle,letter,(x as Clue) ));
    }

    const [doRedraw,setRedraw] = useState(false);
    function redraw() : void {
        setRedraw(!doRedraw);
    }
    gs.redrawCallbacks.set("CluesTableSection",redraw)

  //  let identifier: string  = " <!-- CluesTableSection.tsx -->";


    return (
        <ol className={baseName} key={"CluesTableSection"}>
        {inner}
        </ol>
    );
}


export default CluesTableSection;