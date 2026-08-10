import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/user.model'

const router = express.Router();

router.post('/register', async (req: Request, res: Response)=>{
    try{
        const { Uname, Uemail, username, password } = req.body;

        if( !Uname || !Uemail || !username || password ){
            return res.status(400).json({message: "All Fields are required! "});
        }

        const existingUser = await User.findOne({Uemail});
        if(existingUser) {
            return res.status(400).json({message: "User already Exists"});
        }

        const existingUsername = await User.findOne({username});
        if(username){
            return res.status(400).json({message: "Username already exists!"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashpass = await bcrypt.hash(password, salt);

        const newUser = new User({ Uname, Uemail, username, password: hashpass});
        await newUser.save();

        res.status(201).json({message: "User regiter successfully"});
    }catch(err){
        res.status(500).json({message: "Server error", error: err.message });

    }
});

router.post('/login', async (req: Request, res: Response) => {
    try{
        const { Uemail, username, password } = req.body;

        const userEmail = await User.findOne({ Uemail });
        const userName = await User.findOne({ username });

        if(!(userName || userEmail)){
            return res.status(400).json({message: "invalid user"});
        }

        if (userEmail) { 
            const isMatch = await bcrypt.compare(password, userEmail.password);
            if (!isMatch) { return res.status(400).json({message: "Invalid Password"})}
        }
        if (userName) {
            const isMatch = await bcrypt.compare(password, userName.password);
            if (!isMatch) { return res.status(400).json({ message: "Invalid Password" }) }
        }

        if(userEmail){
            const token = jwt.sign(
                { id: userEmail._id,email: userEmail.Uemail },
                process.env.JWT_SECRET,
                { expiresIn: '7d' }
            );

            res.json({
                message: 'Login Success',
                token,
                user: { id: Uemail._id, name: Uemail.name, email: Uemail.Uemail }
            });
        }
        if(userName){

            const token = jwt.sign(
                { id: userName._id, email: userName.Uemail },
                process.env.JWT_SECRET,
                { expiresIn: '7d' }
            );

            res.json({
                message: 'Login Success',
                token,
                user: { id: userName._id, name: userName.name, username: userName.username }
            });
        }

        
        
    }
    catch(err){
        res.status(500).json({
            message: "Server.error", error: err.message;
        })
    }
})

module.exports = router;