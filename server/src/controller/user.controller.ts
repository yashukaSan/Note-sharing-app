import { User } from '../models/user.model';
import {Request, Response} from 'express';
import {type UserPayload, generateAccessToken, generateRefreshToken} from './token.controller'

let refreshTokenDb: string[] = [];

const registerUser = async(req: Request, res: Response) => {
    try{
        const {name, email, username, password} = req.body;

        if(!name || !email || !username || !password){
            return res.status(400).json({ message: "All fields are required"});
        }

        const emailLower = email.toString().toLowerCase();
        const usernameLower = username.toString().toLowerCase();

        const existingUser = await User.findOne({
            $or: [
                {Uemail: emailLower},
                {username: usernameLower},
            ]
        });

        if(existingUser){
            return res.status(409).json({message: "User already exists"});
        }

        const user = await User.create({
            Uname: name,
            Uemail: emailLower,
            username: usernameLower,
            password: password
        });

        res.status(201).json({
            message: "User registered successfully",
            user: {id: user._id, email: user.Uemail, username: user.username }
        });
    }
    catch(err){
        console.error(err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

const loginUser = async (req:Request, res: Response) => {
    try{
        const {email, username, password} = req.body;

        const searchEmail = email ? email.toString().toLowerCase() : undefined;
        const searchUsername = username ? username.toString().toLowerCase() : undefined;

        const user = await User.findOne({
            $or: [
              { Uemail: searchEmail },
              { username: searchUsername }
            ]
        });

        if (!user) {
            return res.status(404).json({ message: "User not found" }); 
        }

        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const userPayload: UserPayload = user;

        const accessToken = generateAccessToken(userPayload);
        const refreshToken = generateRefreshToken(userPayload);

        refreshTokenDb.push(refreshToken);

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: 'strict',
            maxAge: 7*24*60*1000
        });

        return res.status(200).json({ message: "Login successful", accessToken });

    }
    catch(err){
        res.status(500).json({message: "Internal Server Error."});
    }
};

const logoutUser = async(req:Request, res: Response)=>{
    try{
        const { email } = req.body;

        const searchEmail = email ? email.toString().toLowerCase() : undefined;
        const user = await User.findOne({
            Uemail: searchEmail
        });
        if(!user) return res.status(404).json({message: "User not found"});

        res.status(200).json({
            message: "Logout Success"
        });
    }catch(err){
        res.status(500).json({message: `Internal server error: ${err}`});
    }
}

 
export { registerUser, loginUser, logoutUser };