import { Response } from 'express';
import jwt from "jsonwebtoken";

const JWT_SECRET:string = process.env.JWT_SECRET!;

export interface IUser {
    _id: string;
    name: string;
    email: string;
}

export const sendTokenResponse = (user: IUser, statusCode: number, res: Response): void => {
    const token = jwt.sign({ id: user._id }, JWT_SECRET, {
        expiresIn: '7d',
    });

    const isProduction = process.env.NODE_VAR === "production";

    res.status(statusCode).cookie('token', token, {
        expires: new Date(Date.now() + (7*24*60*60*1000)),
        httpOnly: true,
        secure: isProduction,
        sameSite: 'strict',
    }).json({
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
        },
    });
};