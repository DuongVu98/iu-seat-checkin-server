export class SeatDto {
    id: string;
    delegateCode: string;
    row: number;
    column: number;
    occupied: boolean;

    thisSetId(id: string): SeatDto {
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
    thisSetOccupied(occupied: boolean): SeatDto {
        this.occupied = occupied;
        return this;
    }
}

export class NumerialInfoDto {
    delegatesAmount: number;
    occupiedAmount: number;

    thisSetDelegatesAmount(amount: number): NumerialInfoDto {
        this.delegatesAmount = amount;
        return this;
    }

    thisSetOccupiedAmount(amount: number): NumerialInfoDto {
        this.occupiedAmount = amount;
        return this;
    }
}
