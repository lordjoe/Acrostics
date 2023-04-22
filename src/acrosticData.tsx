
import {Puzzle} from "./Puzzle";
import PuzzleJSON from "./PuzzeJSON";
import AnswerCell from "./AnswerCell";
import Clue from "./Clue";
import PersistentObject from "./PersistentObject";


const path: string = 'Acrostic-2000-6-5.json'


export function readJSonData(): PuzzleJSON {
    let ret: PuzzleJSON = new PuzzleJSON();
    let answer: PuzzleJSON = readPuzzle();
    ret.answer = answer.answer;
    ret.author = answer.author;
    ret.source = answer.source;
    ret.authorCell = answer.authorCell;
    ret.clues = answer.clues;
    console.log("answer", answer.answer);
    console.log("author", answer.author);
    console.log("source", answer.source);
    console.log("authorCell", answer.authorCell);
    console.log("clues", answer.clues);
    return ret;

}


export function readPuzzle(): PuzzleJSON {
    let ret: PuzzleJSON = new PuzzleJSON();
    let jsonString: string = path; // fs.readFileSync(url, "utf8");
    const answer = JSON.parse(jsonString);
    ret.answer = answer.answer;
    ret.author = answer.author;
    ret.source = answer.source;
    ret.authorCell = answer.authorCell;
    ret.clues = answer.clues;
    console.log("answer", answer.answer);
    console.log("author", answer.author);
    console.log("source", answer.source);
    console.log("authorCell", answer.authorCell);
    console.log("clues", answer.clues);
    return ret;

}

export function parsePuzzleString(jsonString: string): PuzzleJSON {
    let ret: PuzzleJSON = new PuzzleJSON();
     const answer = JSON.parse(jsonString);
    ret.answer = answer.answer;
    ret.author = answer.author;
    ret.source = answer.source;
    ret.authorCell = answer.authorCell;
    ret.clues = answer.clues;
    console.log("answer", answer.answer);
    console.log("author", answer.author);
    console.log("source", answer.source);
    console.log("authorCell", answer.authorCell);
    console.log("clues", answer.clues);
    return ret;

}



export const Alphabet: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

export function fromJSON(filename: string,json: PuzzleJSON): Puzzle {
    var retX = Puzzle.buildPuzzle();
    let ret: Puzzle = retX;
    ret.author = json.author;
    ret.setAnswer(json.answer);
    ret.book = json.source
    ret.source  = json.authorCell;

    // let src: string = ret.getSourceString();

    let cluesx = json.clues;
    let asMap = Object.entries(cluesx);
    let NClues = asMap.length;
    for (let i = 0; i < NClues; i++) {
        const nClue = asMap[i];
        const index: string = nClue[0];
        const toParsex = nClue[1];
        let hint: string = toParsex.hint;
        let answer: string = toParsex.answer;
        let cells: number[] = toParsex.cells
        let cl: Clue = new Clue(ret, index, hint, answer, cells);
        ret.addClue(index, cl);
    }
    ret.setDate(PersistentObject.buildDate(filename))

    return ret;
}



// export function readDefaultData(): Puzzle {
//     let answer = JSON.parse(puzzlej);
//
//     var ret: Puzzle = fromJSON(answer);
//      alert("reading puzzle");
//     return ret;
// }