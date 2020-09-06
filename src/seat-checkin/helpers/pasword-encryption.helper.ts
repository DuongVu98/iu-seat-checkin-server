import { Injectable } from "@nestjs/common";
import Crypto = require("crypto-js");

const fullBoard = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
const saltLength = 6;

@Injectable()
export class PasswordEncryptionHelper {
    getFullBoard(): string {
        return fullBoard;
    }
    getHashshingCode(password: string, salt: string, pepper: string): string {
        return this.hash(password.concat(salt).concat(pepper));
    }

    hash(origin: string): string {
        return Crypto.SHA256(origin).toString();
    }

    getRandomSalt(): string {
        return Math.random()
            .toString(36)
            .substring(saltLength + 1);
    }

    getRandomPepper(): string {
        const randomNumber = Math.floor(Math.random() * Math.floor(fullBoard.length));
        return fullBoard.charAt(randomNumber);
    }
}
