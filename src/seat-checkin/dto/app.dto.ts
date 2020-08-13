export class SeatDto {

    id: string;
    delegateCode: string;
    row: number;
    column: number;

    thisSetId(id: string): SeatDto{
        this.id = id;
        return this;
    }

    thisSetelegateCode(code: string): SeatDto {
        this.delegateCode = code;
        return this;
    }
    thisSetRow(row: number): SeatDto {
        this.row = row;
        return this;
    }
    thisSetColumn(column: number): SeatDto {
        this.column = column;
        return this;
    }
}
