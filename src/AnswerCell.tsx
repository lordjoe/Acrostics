import Cell from "./Cell";


class AnswerCell extends Cell {
    answer_: string

    guess_: string = '';

    constructor(index: number, s: string) {
        super(index);
        this.answer_ = s.toUpperCase()
    }

    public getGuess(): string {
        return this.guess_;
    }

    public setGuess(s: string) {
        this.guess_ = s;
    }

    public getAnswer(): string {
        return this.answer_;
    }

    public setAnswer(s: string) {
        this.answer_ = s;
    }

    public isFilledIn() : boolean {
        return this.guess_.length > 0;
    }
    public isCorrect() : boolean {
        return this.guess_ === this.answer_;
    }

}

export default AnswerCell;