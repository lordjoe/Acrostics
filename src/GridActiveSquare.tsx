import {  Puzzle} from "./Puzzle";

import {GameState } from "./GameState";
import React  from "react";
import {KeyboardEvent} from 'react';
import PersistentObject from "./PersistentObject";


function GridActiveSquare(puzzle: Puzzle, index: number) {
      let gs: GameState = PersistentObject.getInstance().getGameState();;




    function setActiveCell(): void {
        gs.theActiveContainer = "PuzzleGrid";
        gs.setActiveCell(index);
        gs.doRedraw();
    }


    function getClassNm(): string {
        let gsx = PersistentObject.getInstance().getGameState();
        let activeString = "ax-grid__cell";
        let activeCell: number = gsx.getActiveCellIndex();
        if (activeCell === index)
            activeString += " active focused";

        return activeString;
    }



    function nextCell(): number {
        let gsx = PersistentObject.getInstance().getGameState();
        let as: number = gsx.getActiveCellIndex();
        if (as === 0)
            return 0;
        let pzl: Puzzle = PersistentObject.getInstance().getPuzzle();
        if (as < pzl.letters.length)
            return as + 1;
        return 0;
    }

    gs.forwardCellCallbacks.set("PuzzleGrid", nextCell);

    function prevCell(): number {
        let gsx = PersistentObject.getInstance().getGameState();
        let as: number = gsx.getActiveCellIndex();
        if (as > 1)
            return as - 1;
        return 0;
    }

    gs.backCellCallbacks.set("PuzzleGrid", prevCell);


    function handleKeywordKeypress(e: KeyboardEvent) {
        let gsx = PersistentObject.getInstance().getGameState();
         gsx.theActiveContainer = "PuzzleGrid";
        gsx.handleKeyboardEvent(e);
     }




    let letter = puzzle.letters[index - 1].getGuess();
 //   if(letter.length > 0)
 //       alert(" cell " + index + " has " + letter);
    return (
        <td className={getClassNm()} tabIndex={0}  >
            <div tabIndex={0} className="ax-grid__square" onClick={setActiveCell}
                 onKeyDown={handleKeywordKeypress}>
                <div className="ax-grid__number"> {index}</div>
                <div className="ax-grid__cheat-flag"></div>
                <div className="ax-grid__clue-letter">{letter}</div>
                <div className="ax-grid__guess">{letter}</div>
            </div>
        </td>
    );
}

export default GridActiveSquare;