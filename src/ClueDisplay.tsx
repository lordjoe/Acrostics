import {Puzzle} from "./Puzzle";


import Clue from "./Clue";
import {ReactNode} from "react";
import AnswerCell from "./AnswerCell";
import ClueCellDisplay from "./ClueCellDisplay";
function ClueDisplay(  puzzle: Puzzle, letter: string, clue: Clue ) {
     let cells: AnswerCell[] = clue.cells;

    let inner: ReactNode[] = [];


    for(let i = 0; i < cells.length; i++) {
        let cell: AnswerCell = cells[i];
         inner.push(ClueCellDisplay(puzzle,clue,cell));
    }


 //   let identifier: string  = " <!-- ClueDisplay.tsx -->";


    return(
        <li className="clue"   >
             <div className="clue-wrapper"><span className="clue-letter">{clue.letter}</span>
                <div className="clue-content"><span className="clue-text">{clue.answer}</span>
                    <div className="answer-sleeve">
                        <table className="ax-grid fixed-size">
                            <tr className="ax-grid__row">
                                { inner }
                            </tr>
                        </table>
                        <div className="clue-answer answer">{clue.answer}</div>
                    </div>
                </div>
            </div>
        </li>
                             );
}

export default ClueDisplay;