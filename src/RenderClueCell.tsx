import React from "react";
import AnswerCell from "./AnswerCell";

 function RenderClueCell(letter: string,l: AnswerCell,i: number) {

     let identifier: string  = " <!-- RenderClueCell.tsx -->";
    return (
        <td className="ax-grid__cell active focused">
              <div className="ax-grid__square">
                <div className="axGrid__number">{i}</div>
                <div className="axGrid__cheat-flag"></div>
                <div className="axGrid__clue-letter">{letter}
                </div>
                <div className="axGrid__guess"></div>
            </div>
        </td>
    );
}

export default RenderClueCell;

