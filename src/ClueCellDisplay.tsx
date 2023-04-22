import Clue from "./Clue";

import {  Puzzle} from "./Puzzle";

import {GameState} from "./GameState";
import PersistentObject from "./PersistentObject";
import {KeyboardEvent, useRef} from "react";



function ClueCellDisplay(puzzle: Puzzle, clue: Clue, ansX: number ) {
 //  let ans: AnswerCell = getPuzzle().letters[ansX];
    let gs: GameState = PersistentObject.getInstance().getGameState();
//    let identifier = " <!-- ClueCellDisplay.tsx -->";

    gs.registerClueCell(ansX,clue);





    function setActiveCell() {
        let gs: GameState  = PersistentObject.getInstance().getGameState();
          gs.theActiveContainer = "ClueCellDisplay";
        gs.setActiveCell(ansX);
        gs.doRedraw();
     }


    function nextCell(): number {
        let gsx = PersistentObject.getInstance().getGameState();
        let as: number = gsx.getActiveCellIndex();
        if (as === 0)
            return 0;
        let c: Clue = (gsx.cellClue.get(as) as Clue);

        return c.nextCell(as);
    }

    gs.forwardCellCallbacks.set("ClueCellDisplay", nextCell);

    function prevCell(): number {
        let gsx = PersistentObject.getInstance().getGameState();
        let as: number = gsx.getActiveCellIndex();
        if (as === 0)
            return 0;
        let c: Clue = (gsx.cellClue.get(as) as Clue);

        return c.prevCell(as);

    }
    gs.backCellCallbacks.set("ClueCellDisplay", prevCell);



    function handleKeywordKeypress(e: KeyboardEvent) {
        let gsx = PersistentObject.getInstance().getGameState();
        gsx.theActiveContainer = "ClueCellDisplay";
        gsx.handleKeyboardEvent(e);
     }




     let clsnm: string = "ax-grid__cell";
    if (gs.getActiveCellIndex() === ansX)
        clsnm = "ax-grid__cell  active focused";

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