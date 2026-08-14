import express, { type Request, type Response, NextFunction } from "express";
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';

const JWT_SECRET: string = process.env.JWT_SECRET!;

interface DecodedToken{
    id: string;
    iat: number;
    exp: number;
}
const  protect = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const authHeader = req.headers.authorization;
    const token = req.cookies?.token || (authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : undefined);

    if(!token){
        res.status(401).json({ message: "Not authorized, Please log-in"});
        return;
    }

    try{
        const decoded = jwt.verify(token, JWT_SECRET) as DecodedToken;

        req.user = { id: decoded.id};
        next();
    }catch(error){
        res.status(401).json({ message: 'Token expired or invalid'});
        return;
    }
};

export default protect;