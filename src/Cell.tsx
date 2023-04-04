 class Cell {
    index: number;

    public isBlack(): boolean
    {
        return this.index === 0;
    }

    constructor(index: number) {
        this.index = index;
    }
}

export default Cell;