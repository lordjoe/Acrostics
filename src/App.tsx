import React, {ReactNode} from 'react';
import {readDefaultData} from "./acrosticData";
import {Puzzle} from "./Puzzle";
import PuzzleGameSection from "./PuzzleGameSection";

function App() {
    let pzl: Puzzle = readDefaultData();

    let inner: ReactNode[] = [];

    inner.push(<PuzzleGameSection puzzle={pzl}/>);


    //   let identifier = " <!-- App.tsx -->";
    return (
        <div className="pz-content">
            {inner}
            <div id="portal-editorial-content"></div>

        </div>
    )
        ;
}

export default App;
