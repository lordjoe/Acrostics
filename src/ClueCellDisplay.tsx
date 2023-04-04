import Clue from "./Clue";
import AnswerCell from "./AnswerCell";
import {Puzzle} from "./Puzzle";

function ClueCellDisplay(puzzle: Puzzle, clue: Clue, cell: AnswerCell) {
//    let identifier = " <!-- ClueCellDisplay.tsx -->";
    return (

        <td className="ax-grid__cell">
            <div className="ax-grid__square clue-blank">
                <div className="ax-grid__guess guess">{cell.getGuess()}</div>
                <div className="ax-grid__blank-number">{cell.index}</div>
            </div>
            <div className="ax-grid__guess"></div>
        </td>
    );
}

export default ClueCellDisplay;