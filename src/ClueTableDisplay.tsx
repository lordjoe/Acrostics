import {Puzzle} from "./Puzzle";


import Clue from "./Clue";
import {ReactNode, useState} from "react";
import AnswerCell from "./AnswerCell";
import ClueCellDisplay from "./ClueCellDisplay";
function ClueTableDisplay(  puzzle: Puzzle, letter: string, clue: Clue ) {
     let cells: AnswerCell[] = clue.cells;

    let inner: ReactNode[] = [];

    const [index,setState]  = useState(0)

    for(let i = 0; i < cells.length; i++) {
        let cell: AnswerCell = cells[i];
         inner.push(ClueCellDisplay(puzzle,clue,cell.index));
    }

     function redraw() {
       setState(index + 1);
    }

  //  let identifier: string  = " <!-- ClueDisplay.tsx -->";


    return(
        <li className="clue"   key={clue.letter}>
             <div className="clue-wrapper"><span className="clue-letter">{clue.letter}.</span>
                <div className="clue-content"><span className="clue-text">{clue.hint}</span>
                    <div className="answer-sleeve">
                        <table className="ax-grid fixed-size">
                            <tr className="ax-grid__row">
                                { inner }
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </li>
                             );
}

export default ClueTableDisplay;