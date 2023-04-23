import Clue from "./Clue";

import {  Puzzle} from "./Puzzle";

import {GameState} from "./GameState";
import PersistentObject from "./PersistentObject";
import {KeyboardEvent, useRef} from "react";



function ClueCellDisplay(puzzle: Puzzle, clue: Clue, ansX: number ) {
 //  let ans: AnswerCell = getPuzzle().letters[ansX];
    let gs: GameState = PersistentObject.getInstance().getGameState();
//    let identifier = " <!-- ClueCellDisplay.tsx -->";







    function setActiveCell() {
          gs.theActiveContainer = "CluesTableSection";
        gs.setActiveCell(ansX);
        gs.doRedraw();
     }





    function handleKeywordKeypress(e: KeyboardEvent) {
        let gsx = PersistentObject.getInstance().getGameState();
        gsx.theActiveContainer = "CluesTableSection";
        gsx.handleKeyboardEvent(e);
     }



      let clsnm: string  = gs.getGridCellState(ansX);

    //  let clsnm: string = "ax-grid__cell";
    // if (gs.getActiveCellIndex() === ansX)
    //     clsnm = "ax-grid__cell  active";

    let letter = puzzle.letters[ansX - 1].getGuess();
    return (

        <td className={clsnm} tabIndex={0} onMouseUp={setActiveCell} onKeyDown={handleKeywordKeypress}  >
            <div tabIndex={0} className="ax-grid__square clue-blank">
                <div className="ax-grid__guess guess">{letter}</div>
                <div className="ax-grid__number">{ansX}</div>
                <div className="ax-grid__guess"></div>
            </div>
        </td>
    );
}

export default ClueCellDisplay;