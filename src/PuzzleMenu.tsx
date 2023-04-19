import {PuzzleHolder} from "./Holders";
import {Puzzle} from "./Puzzle";


import TimerDisplay from "./TimerDisplay";

import RevealMenu from "./RevealMenu";
import {ReactNode} from "react";

function PuzzleMenu(this: any, props: PuzzleHolder) {


    let inner: ReactNode[] = [];

    let puzzle: Puzzle = props.puzzle;
      inner.push(<RevealMenu puzzle={puzzle}/>);

// eslint-disable-next-line
    let startTime: number = 0;

    return (
        <div className="pz-game-toolbar xwd__hide-when-no-data">
            <div className="pz-row">
                <div className="pz-module pz-flex-row pz-game-toolbar-content"
                     id="portal-game-toolbar">
                    <div className="acrostic-tools">
                        <div className="acrostic-tools__section">
                            <button className="acrostic-tool acrostic-tool__icon acrostic-tool__settings"
                                    id="solving-settings">
                            </button>
                        </div>
                        <div className="acrostic-tools__section" id="timer-container"><span
                            className="acrostic-tool acrostic-tool__timer" id="timer"><span
                            className="timer-count">{ <TimerDisplay  />}</span><span className="pause-button"></span></span>
                        </div>
                        <div className="acrostic-tools__section">
                            <button className="acrostic-tool grid-toggle" id="show-grid-toggle"><span
                                className="button-text">See</span></button>
                            <div className="toolbar-menu-wrapper">
                                <button className="acrostic-tool clear-menu" data-action="Clear"></button>
                                <ul data-action="erase" className="toolbar-menu">
                                    <li data-scope="letter"><span>Square</span></li>
                                    <li data-scope="word"><span>Word</span></li>
                                    <li data-scope="puzzle"><span>Puzzle</span></li>
                                    <li data-scope="all" data-disqualifier="Resetting the timer">
                                        <span>Puzzle &amp; Timer</span>
                                    </li>
                                </ul>
                            </div>
                                  {inner}
                               <div className="toolbar-menu-wrapper">
                                <button className="acrostic-tool check-menu disable-when-locked hide-on-solve"
                                        data-action="Check" data-disqualifier="Using Check"></button>
                                <ul data-action="check" className="toolbar-menu">
                                    <li data-scope="letter"><span>Square</span></li>
                                    <li data-scope="word"><span>Word</span></li>
                                    <li data-scope="puzzle"><span>Puzzle</span></li>
                                </ul>
                            </div>
                            < button
                                className="acrostic-tool acrostic-tool__icon acrostic-tool__pencil pencil-mode-toggle"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PuzzleMenu;