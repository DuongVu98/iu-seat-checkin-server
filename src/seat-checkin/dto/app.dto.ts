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
export class UserAccountDto {
    id: string;
    username: string;
    password: string;
    salt: string;

    thisSetId(id: string): UserAccountDto {
        this.id = id;
        return this;
    }
    thisSetUsername(username: string): UserAccountDto {
        this.username = username;
        return this;
    }
    thisSetPassword(password: string): UserAccountDto {
        this.password = password;
        return this;
    }
    thisSetSalt(salt: string): UserAccountDto {
        this.salt = salt;
        return this;
    }
}
export interface LoginForm {
    username: string;
    password: string;
}

export interface CreateAccountForm {
    username: string;
    password: string;
}
export interface ChangePasswordForm {
    accountId: string;
    newPassword: string;
}

export interface LoginResponse {
    account?: UserAccountDto;
    isValidInput?: boolean;
}
