import AnswerCell from "./AnswerCell";
import React from "react";
import Clue from "./Clue";
import Cell from "./Cell";
import {Puzzle} from "./Puzzle";


function RenderClueCell(puzzle: Puzzle,letter: string, c: Clue) {
    let identifier: string  = " <!-- RenderClueCell.tsx -->";
    let cells: number[] = c.getCells();
    let classText: string = "";
    if(puzzle.getFocusedClue() === c)
        classText = " active";

    return (
        <li className="clue {classText}">
              <div className="clue-wrapper"><span className="clue-letter">{letter}.</span>
                <div className="clue-content"><span className="clue-text">{c.hint}</span>
                    <div className="answer-sleeve">
                        <table className="axGrid fixed-size">
                            <tr className="axGrid__row">
                            </tr>
                        </table>
                        <div className="clueAnswer answer">{c.answer}</div>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default RenderClueCell;