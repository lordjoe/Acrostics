import React, {ReactNode} from 'react';
import {Puzzle} from "./Puzzle";
import PuzzleGameSection from "./PuzzleGameSection";
import PersistentObject from "./PersistentObject";

import ShowDirectory from "./ShowDirectory";
import ShowFiles from "./ShowFiles";
import FileReader from "./FileReader";
import FileList from "./FileList";
import HandlePuzzle from "./HandlePuzzle";

function App() {
    const urlParams = new URLSearchParams(window.location.search);
    let directory = urlParams.get('directory');
    let  filename = urlParams.get('filename');

  //  const queryParameters = new URLSearchParams(window.location.search);
 //   const name = queryParameters.get("puzzleName");
  //  alert(" Puzzle Name = " + name )

  // filename="filename=files/puzzles/Acrostic-2019-12-8.json";
  //   filename = "hg";
    if(!filename)
        directory = "files/puzzles";
    let inner: ReactNode[] = [];
    if(directory)  {
        inner.push(<FileList />)
   //     inner.push(<ShowDirectory directory={directory}/>)
    }
    else {
        inner.push(<HandlePuzzle filename={(filename as string)}  />)
 //       let pzl: Puzzle = PersistentObject.getInstance().getPuzzle();
//        inner.push(<PuzzleGameSection puzzle={pzl}/>);

    }


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