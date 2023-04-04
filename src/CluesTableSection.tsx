import {Puzzle} from "./Puzzle";
import Clue from "./Clue";
import {PuzzleHolder} from "./Holders";
import React, {ReactNode} from "react";
import {Alphabet} from "./acrosticData";
import ClueTableDisplay from "./ClueTableDisplay";

function CluesTableSection(props: PuzzleHolder ) {
    let puzzle: Puzzle = props.puzzle;
    let clues: Map<string, Clue> = puzzle.clues;

    let keys: string[] = Alphabet;
    let inner: ReactNode[] = [];
    for(let i = 0; i < clues.size; i++) {
        let letter: string = keys[i];
        let x  = clues.get(letter);
        inner.push(ClueTableDisplay(puzzle,letter,(x as Clue) ));
    }

  //  let identifier: string  = " <!-- CluesTableSection.tsx -->";

    return (
        <ol className="clue-list container">
        {inner}
        </ol>
    );
}


export default CluesTableSection;