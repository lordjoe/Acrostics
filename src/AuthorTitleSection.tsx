import {  Puzzle} from "./Puzzle";

import {PuzzleCellHolder, PuzzleHolder} from "./Holders";
import React, { KeyboardEvent, ReactNode, useState} from "react";
import AnswerCell from "./AnswerCell";
import {GameState } from "./GameState";


import PersistentObject from "./PersistentObject";



function AuthorTitleSection(props: PuzzleHolder) {
    let puz: Puzzle = props.puzzle;
    let author: AnswerCell[] = puz.getSourceCells();
    let gs: GameState = PersistentObject.getInstance().getGameState();;



    let inner: ReactNode[] = [];
    for (let i: number = 0; i < author.length; i++) {
        let aCell: AnswerCell = author[i];
         inner.push(<AuthorTitleCell key={i} puzzle={puz} cell={aCell}  />);
    }


    const [doRedraw,setRedraw] = useState(false);
    function redraw() : void {
        setRedraw(!doRedraw);
    }
    gs.redrawCallbacks.set("AuthorTitleSection",redraw);


    let clsnm = "author-title container";
    if(gs.theActiveContainer === this)
        clsnm += " selcted";

    return (
        <div className={clsnm} >
            <div className="explanation">Author and title of the work from which the quote
                above is derived.
            </div>
            <div className="answer-sleeve">
                <table className="ax-grid fixed-size">
                    <tbody>
                    <tr className="ax-grid__row">
                        { inner }
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}


function AuthorTitleCell(props: PuzzleCellHolder, focused: boolean,active: boolean) {
//    let puzzle: Puzzle = props.puzzle;
    let cell: AnswerCell = props.cell;
    // eslint-disable-next-line
    const  [guess  ,setState] = useState<string>(cell.getGuess());
    // eslint-disable-next-line
    let gs: GameState = PersistentObject.getInstance().getGameState();


    function setActiveCell() : void {
        gs.theActiveContainer = "AuthorTitleSection";
        gs.setActiveCell(cell.index);
           gs.doRedraw();
     }


    function nextCell(): number {
        let gsx: GameState = PersistentObject.getInstance().getGameState();
        let pzl: Puzzle = PersistentObject.getInstance().getPuzzle();
        let as: number = gsx.getActiveCellIndex();
        return pzl.getNextAuthorTitleIndex(as);
    }

    gs.forwardCellCallbacks.set("AuthorTitleSection", nextCell);

    function prevCell(): number {
        let gsx: GameState = PersistentObject.getInstance().getGameState();
        let pzl: Puzzle = PersistentObject.getInstance().getPuzzle();
        let as: number = gsx.getActiveCellIndex();
        return pzl.getPreviousAuthorTitleIndex(as);

    }
    gs.backCellCallbacks.set("AuthorTitleSection", prevCell);

     let activeString = "ax-grid__cell";
   if (gs.getActiveCellIndex() === cell.index) {
        activeString += " active focused";
    }
    function handleKeywordKeypress(e: KeyboardEvent) {
        let gsx = PersistentObject.getInstance().getGameState();;
        gsx.theActiveContainer = "AuthorTitleSection";
        gsx.handleKeyboardEvent(e);
    }


    return (
        <td className={activeString} key={cell.index}  tabIndex={0}  >
            <div  className="ax-grid__square"  tabIndex={0} onClick={setActiveCell}  onKeyDown={handleKeywordKeypress}  >
                <div className="ax-grid__number">{cell.index}</div>
                <div className="ax-grid__cheat-flag"></div>
                <div className="ax-grid__clue-letter">{cell.getAnswer()}</div>
                <div className="ax-grid__guess">{cell.getGuess()}</div>
            </div >
        </td>
    );
}



export default AuthorTitleSection;