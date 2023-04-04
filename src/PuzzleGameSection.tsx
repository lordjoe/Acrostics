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
import PuzzleGameField from "./PuzzleGameField";

function PuzzleGameSection(props: PuzzleHolder) {
    let pzl: Puzzle = props.puzzle

    let inner: ReactNode[] = [];

    //  inner.push(<PuzzleToolBar puzzle={pzl}/>);
    inner.push(<PuzzleMenu puzzle={pzl}/>);
    inner.push(<GameModels puzzle={pzl}/>);
    inner.push(<PuzzleGameField puzzle={pzl}/>);


    //   let identifier = " <!-- App.tsx -->";
    return (
        <div className="pz-section numbers-on clues-on" id="acrostic-game">
            <div className="pz-row pz-game-title-bar xwd__hide-when-no-data">
                <div className="pz-module" id="portal-game-header">
                    <div className="acrostic-header">
                        <div className="acrostic-header__left"><h2><em
                            className="pz-game-title">Acrostic</em><span
                            className="pz-game-date">June 5, 2022</span></h2>
                            <p className="acrostic-header__credits">By <em>Emily Cox and Henry
                                Rathvon</em> Edited by <em>Will
                                Shortz</em></p></div>
                        <div className="acrostic-header__right"><a
                            href="https://www.nytimes.com/svc/crosswords/v2/puzzle/print/Jun0522.2.pdf"
                            className="acrostic-header__print-button" rel="noopener noreferrer" target="_blank"><i
                            className="icon-web_icons_print"></i><span>Print Puzzle</span></a><a
                            href="https://www.nytimes.com/svc/crosswords/v2/puzzle/print/Jun0522.2.ans.pdf"
                            className="acrostic-header__print-button" rel="noopener noreferrer" target="_blank"><i
                            className="icon-web_icons_print"></i><span>Print Solution</span></a></div>
                    </div>
                </div>
            </div>

            <div className="pz-game-wrapper" id="js-hook-game-wrapper">
                <div id="portal-game-moments"></div>
                <div id="portal-sb-modals"></div>
                <div id="portal-modal-system"></div>
                <div className="pz-game-screen" id="js-hook-pz-moment__game">
                    <div className="pz-game-toolbar xwd__hide-when-no-data">
                        <div className="pz-row">
                            {inner}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default PuzzleGameSection;
