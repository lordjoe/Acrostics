import React, { useState } from 'react';
import {PuzzleHolder} from "./Holders";

 function RevealMenu(props: PuzzleHolder)   {
    const [showMenu, setShowMenu] = useState(false);


    const handleReveal = (scope: string) => {
        setShowMenu(!showMenu);
        console.log(`Reveal ${scope}`);
        // Add your reveal logic here
    };


     const handleReveal2 = () => {
         console.log(`Reveal `);
         setShowMenu(!showMenu);
          // Add your reveal logic here
     };



     return (
     <div className="toolbar-menu-wrapper">
            <button
                className="acrostic-tool reveal-menu disable-when-locked hide-on-solve"
                data-action="Reveal"
                data-disqualifier="Using Reveal"
                onClick={handleReveal2}
            ></button>
            {showMenu && (
                <ul data-action="reveal" className="toolbar-menu">
                    <li data-scope="letter" onClick={() => handleReveal('Square')}>
                        <span>Square</span>
                    </li>
                    <li data-scope="word" onClick={() => handleReveal('Word')}>
                        <span>Word</span>
                    </li>
                    <li data-scope="puzzle" onClick={() => handleReveal('Puzzle')}>
                        <span>Puzzle</span>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default RevealMenu;