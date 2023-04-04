import {Puzzle} from "./Puzzle";
import AnswerCell from "./AnswerCell";

function GridActiveSquare(props: { puzzle: Puzzle; index: number; }) {
    let puzzle: Puzzle = props.puzzle;
    let index: number = props.index;
    let ans: AnswerCell = puzzle.getCell(index);
    return(
        <td className="ax-grid__cell">
        <div className="ax-grid__square">
        <div className="ax-grid__number"> {index}</div>
            <div className="ax-grid__cheat-flag"></div>
        <div className="ax-grid__clue-letter">{ans.answer}</div>
        <div className="ax-grid__guess">{ans.getGuess()}</div>
        </div>
        </td>
    );
}

export default GridActiveSquare;