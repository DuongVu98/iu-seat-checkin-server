export class SeatDto {

    id: string;
    delegateCode: string;
    row: number;
    column: number;

    setId(id: string): SeatDto{
        this.id = id;
        return this;
    }

    setDelegateCode(code: string): SeatDto {
        this.delegateCode = code;
        return this;
    }
    setRow(row: number): SeatDto {
        this.row = row;
        return this;
    }
    setColumn(column: number): SeatDto {
        this.column = column;
        return this;
    }
}
