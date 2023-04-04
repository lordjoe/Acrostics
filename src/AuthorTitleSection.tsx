import {Puzzle} from "./Puzzle";

import {PuzzleCellHolder, PuzzleHolder} from "./Holders";
import React, {ReactNode} from "react";
import AnswerCell from "./AnswerCell";


function AuthorTitleSection(props: PuzzleHolder) {
    let puz: Puzzle = props.puzzle;
    let author: AnswerCell[] = puz.getSource();

    let inner: ReactNode[] = [];
    for (let i: number = 0; i < author.length; i++) {
        inner.push(<AuthorTitleCell key={i} puzzle={puz} cell={author[i]}/>);
    };

    return (
        <div className="author-title container">
            <div className="explanation">Author and title of the work from which the quote
                above is derived.
            </div>
            <div className="answer-sleeve">
                <table className="ax-grid fixed-size">
                    <tr className="ax-grid__row">
                        { inner }
                    </tr>
                </table>
            </div>
        </div>
    );
}


function AuthorTitleCell(props: PuzzleCellHolder) {
//    let puzzle: Puzzle = props.puzzle;
    let cell: AnswerCell = props.cell;
    return (
        <td className="ax-grid__cell" key={props.key}>
            <div className="ax-grid__square">
                <div className="ax-grid__number">{cell.index}</div>
                <div className="ax-grid__cheat-flag"></div>
                <div className="ax-grid__clue-letter">{cell.answer}</div>
                <div className="ax-grid__guess">{cell.getGuess()}</div>
            </div>
        </td>
    );
}



export default AuthorTitleSection;