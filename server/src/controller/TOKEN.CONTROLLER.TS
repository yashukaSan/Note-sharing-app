import jwt from "jsonwebtoken";

const ACCESS_SECRET:string = process.env.JWT_ACCESS_SECRET!;
const REFRESH_SECRET: string = process.env.JWT_REFRESH_SECRET!;

let refreshTokenDb: string[] = [];

export interface UserPayload {
    Uname: string;
    Uemail: string;
    username: string;
    password: string;
}

export const generateAccessToken = (user: UserPayload): string => {
    return jwt.sign(user, ACCESS_SECRET, { expiresIn: '15m'});
};

export const generateRefreshToken = (user: UserPayload): string => {
    return jwt.sign(user, REFRESH_SECRET, { expiresIn: "7d"});
}