import {puzzlej} from "./puzzjeJ";
import {Puzzle} from "./Puzzle";
import PuzzleJSON from "./PuzzeJSON";
import AnswerCell from "./AnswerCell";
import Clue from "./Clue";




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








export const Alphabet : string[] = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function fromJSON(json: PuzzleJSON): Puzzle {
    var retX = Puzzle.buildPuzzle() ;
    let ret: Puzzle = retX;
    ret.author = json.author;
    ret.setAnswer(json.answer);
    ret.book = json.source
    let srcStr: number[] = json.authorCell;

    for (let i = 0; i < srcStr.length; i++) {
        let cl: number = srcStr[i];
        let acl: AnswerCell = ret.getCell(cl)
        ret.addSourceCell(acl);
    }
     // let src: string = ret.getSourceString();

    let cluesx = json.clues;
     let asMap = Object.entries(cluesx);
    let NClues = asMap.length;
    for (let i = 0; i < NClues ; i++) {
        const nClue = asMap[i];
        const index: string = nClue[0];
        const toParsex = nClue[1];
        let hint:  string = toParsex.hint;
        let answer:  string = toParsex.answer;
        let cells: number[] = toParsex.cells
        ret.date = new Date(2022,6,5);
        let  cl: Clue  = new Clue(ret,index,hint,answer,cells);
        ret.addClue(index,cl)
    }


    return ret;
}



export function readDefaultData(): Puzzle {
    console.log("Ready to read data");
    let answer = JSON.parse(puzzlej);
    //   let answer: PuzzleJSON = readJSonData(path);
     var ret: Puzzle = fromJSON(answer);
    return ret;
}