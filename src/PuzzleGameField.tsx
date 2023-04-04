import React, {ReactNode} from 'react';
import './App.css';
import {Puzzle} from "./Puzzle";
import PuzzleMenu from "./PuzzleMenu";
import ClueShower from "./ClueShower";
import CluesTableSection from "./CluesTableSection";
import PuzzleGrid from "./PuzzleGrid";
import AuthorTitleSection from "./AuthorTitleSection";

import PuzzleToolBar from "./PuzzleToolBar";
import {PuzzleHolder} from "./Holders";
import GameModels from "./GameModels";

function PuzzleGameField(props: PuzzleHolder) {
    let pzl: Puzzle = props.puzzle

    let inner: ReactNode[] = [];

    //  inner.push(<PuzzleToolBar puzzle={pzl}/>);
       inner.push(<ClueShower puzzle={pzl}/>);
    inner.push(<PuzzleGrid puzzle={pzl}/>);
    inner.push(<AuthorTitleSection puzzle={pzl}/>);
    inner.push(<CluesTableSection puzzle={pzl}/>);


    //   let identifier = " <!-- App.tsx -->";
    return (
        <div className="pz-game-field" id="pz-game-root">
            <div id="acrostic-wrap">
                <div id="shell">
                    <div className="print-game-grid" id="main">
                        <div id="game-container">
                            <header className="acrostic-subhead"><p className="acrostic-subhead__note">
                                Answer the clues to discover the quotation. Use Enter/Return to jump
                                between words and Tab to toggle between the clues, grid and author/title
                                row.</p></header>

                            {inner}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default PuzzleGameField;
