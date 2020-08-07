export class SeatDto {

    id: string;
    delegateCode: string;

    setId(id: string): SeatDto{
        this.id = id;
        return this;
    }

    setDelegateCode(code: string): SeatDto {
        this.delegateCode = code;
        return this;
    }
}
