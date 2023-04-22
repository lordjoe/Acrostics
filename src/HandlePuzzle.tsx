import React, {useEffect, useState} from 'react';
import {FilenameHolder} from "./Holders";
import {fromJSON, parsePuzzleString} from "./acrosticData";
import PersistentObject from "./PersistentObject";
import PuzzleGameSection from "./PuzzleGameSection";
import PuzzleJSON from "./PuzzeJSON";
import {Puzzle} from "./Puzzle";


function HandlePuzzle(props: FilenameHolder) {
  const [fileContent, setFileContent] = useState<string | null>(null);

    let filename = props.filename;



    useEffect(() => {
        const fetchFileContent = async () => {
            try {
                const response = await fetch(filename);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const text = await response.text();

                processText(filename,text);
                setFileContent(text);
            } catch (error) {
                alert('There was a problem fetching the file content:' + error);
            }
        };

        const processText = (filename: string,text: string): void => {
            let json: PuzzleJSON = parsePuzzleString(text);
            let pzl: Puzzle = fromJSON(filename,json);
              PersistentObject.getInstance().setPuzzle(pzl);
           };

        if (filename) {
            fetchFileContent();
        }
    }, [filename]);

    return (
        <div>
            {PersistentObject.getInstance().hasPuzzle() ? (
 //                   <pre>{fileContent}</pre>
               <PuzzleGameSection puzzle={PersistentObject.getInstance().getPuzzle()}/>
            ) : (
                <p>Loading...</p>
            )}
           </div>
    );
};

export default HandlePuzzle;