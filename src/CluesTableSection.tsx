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


    function nextCell(): number {
        let gsx = PersistentObject.getInstance().getGameState();
        let pzl = PersistentObject.getInstance().getPuzzle();
        let as: number = gsx.getActiveCellIndex();
        if (as === 0)
            return 0;
        let clueLetter: string  = (pzl.clueCell.get(as) as string);
        let c: Clue = (pzl.getClue(clueLetter)  as Clue);

        return c.nextCell(as);
    }

    gs.forwardCellCallbacks.set("CluesTableSection", nextCell);

    function prevCell(): number {
        let gsx = PersistentObject.getInstance().getGameState();
        let pzl = PersistentObject.getInstance().getPuzzle();
        let as: number = gsx.getActiveCellIndex();
        if (as === 0)
            return 0;
        let clueLetter: string  = (pzl.clueCell.get(as) as string);
        let c: Clue = (pzl.getClue(clueLetter)  as Clue);

        return c.prevCell(as);

    }
    gs.backCellCallbacks.set("CluesTableSection", prevCell);

    const [doRedraw,setRedraw] = useState(false);
    function redraw() : void {
        setRedraw(!doRedraw);
    }
    gs.redrawCallbacks.set("CluesTableSection",redraw)
    gs.theActiveContainer ="CluesTableSection" ;

  //  gs.setActiveCell(gs.firstClueCell);

  //  let identifier: string  = " <!-- CluesTableSection.tsx -->";


    return (
        <ol className={baseName} key={"CluesTableSection"}>
        {inner}
        </ol>
    );
}


export default CluesTableSection;