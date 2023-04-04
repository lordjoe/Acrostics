import {PuzzleHolder} from "./Holders";
import {Puzzle} from "./Puzzle";

function PuzzleToolBar(props: PuzzleHolder) {

//    let identifier: string  = " <!-- PuzzleMenu.tsx -->";
    let puzzle: Puzzle = props.puzzle;
    let dateStr = puzzle.date.toString();
    return (
        <div className="pz-row pz-game-title-bar xwd__hide-when-no-data">
            <div className="pz-module" id="portal-game-header">
                <div className="acrostic-header">
                    <div className="acrostic-header__left"><h2><em className="pz-game-title">Acrostic</em><span
                        className="pz-game-date">{dateStr}</span></h2>
                        <p className="acrostic-header__credits">By <em>Emily Cox and Henry Rathvon</em> Edited by <em>Will
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
    );
}

export default PuzzleToolBar;