import React, {ReactNode} from 'react';
import {Puzzle} from "./Puzzle";
import PuzzleGameSection from "./PuzzleGameSection";
import PersistentObject from "./PersistentObject";

function App() {
  //  const queryParameters = new URLSearchParams(window.location.search);
 //   const name = queryParameters.get("puzzleName");
  //  alert(" Puzzle Name = " + name )
    let pzl: Puzzle = PersistentObject.getInstance().getPuzzle();

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