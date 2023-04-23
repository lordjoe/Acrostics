import {Puzzle} from "./Puzzle";


import Clue from "./Clue";
import {ReactNode} from "react";
import AnswerCell from "./AnswerCell";
import ClueCellDisplay from "./ClueCellDisplay";
import PersistentObject from "./PersistentObject";


function ClueDisplay(  puzzle: Puzzle, letter: string, clue: Clue) {
     let cells: number[] = clue.getCells();

    let inner: ReactNode[] = [];




    for(let i = 0; i < cells.length; i++) {
        let cell: number = cells[i];
         inner.push(ClueCellDisplay(puzzle,clue,cell ));
    }


    let gsx = PersistentObject.getInstance().getGameState();
 //   let identifier: string  = " <!-- ClueDisplay.tsx -->";
    let clsNme = "clue";
    if(gsx.isSelectedClue(letter))
        clsNme += " selected";

    return(
        <li className={clsNme}  key={clue.letter}  >
             <div className="clue-wrapper"><span className="clue-letter">{clue.letter}</span>
                <div className="clue-content"><span className="clue-text">{clue.hint}</span>
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