import Cell from "./Cell";


class AnswerCell extends Cell {
    answer: string

    guess: string = '';

    constructor(index: number, s: string) {
        super(index);
        this.answer = s.toUpperCase()
    }

    public getGuess(): string {
        return this.guess;
    }

    public setGuess(s: string) {
        this.guess = s;
    }

    public getAnswer(): string {
        return this.answer;
    }

    public setAnswer(s: string) {
        this.answer = s;
    }

}

export default AnswerCell;