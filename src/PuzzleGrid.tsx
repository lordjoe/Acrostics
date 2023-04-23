import {Puzzle} from "./Puzzle";

import Cell from "./Cell";

import React, {ReactNode, useState} from "react";
import GridBlackSquare from "./GridBlackSquare";
import GridActiveSquare from "./GridActiveSquare";
import {PuzzleHolder} from "./Holders";

import {GameState} from "./GameState";
import PersistentObject from "./PersistentObject";


function buildOneRow(pzl: Puzzle, cells: Cell[]): ReactNode {
    let inner: ReactNode[] = [];
    let puzzle:Puzzle = pzl
    for (let i = 0; i < cells.length; i++) {
        let cell = cells[i];
         if (cell.isBlack()) {
            inner.push(<GridBlackSquare/>);
        } else {
            inner.push(GridActiveSquare( puzzle,cell.index));
        }

    }
    return (
        <tr className="ax-grid__row">
            {inner}
        </tr>
    )
}

function PuzzleGrid(props: PuzzleHolder) {
    let puzzle: Puzzle = props.puzzle;
    const rowLength: number = 27;
    let cells: Cell[] = puzzle.getGridCells();
    let rows: Cell[][] = [];
    let accumulator: Cell[] = [];
    // eslint-disable-next-line
    const [active,setActive] = useState<boolean>(false);
    let gs: GameState = PersistentObject.getInstance().getGameState();

    const [doRedraw,setRedraw] = useState(false);
    function redraw() : void {
        setRedraw(!doRedraw);
    }
    gs.redrawCallbacks.set("PuzzleGrid",redraw);

    for (let i = 0; i < cells.length; i++) {
        accumulator.push(cells[i]);
        if (accumulator.length >= rowLength) {
            rows.push(accumulator);
            accumulator = [];
        }
    }

    if (accumulator.length > 0) {
        while (accumulator.length < rowLength) {
            accumulator.push(puzzle.blackCell());
        }
        rows.push(accumulator);
    }


    let inner: ReactNode[] = [];

    //  let identifier: string  = " <!-- PuzzleGrid.tsx -->";

    for (let i = 0; i < rows.length; i++) {
        let onerow = rows[i];
        inner.push(buildOneRow(puzzle, onerow));
    }



    return (
        <div className="game-grid container focused">
            <div className="answer-sleeve">
                <div className="ax-grid__wrap">
                    <table className="ax-grid">
                        <tbody className="ax-grid__body">
                        {inner}
                        </tbody>
                    </table>
                </div>
                <div className="answer">
                    <div className="grid-answer">{puzzle.answer}
                    </div>
                </div>
                <div className="work-info"> — <span className="work-author">{puzzle.author}</span>
                    “<span className="work-title">{puzzle.book}</span>”
                </div>
            </div>
        </div>
    );
}

export default PuzzleGrid;