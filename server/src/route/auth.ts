import express, { Request, Response, Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User, IUser } from '../models/user.model';

const router: Router = express.Router();

// Shape of the data expected in each request body
interface RegisterBody {
    Uname: string;
    Uemail: string;
    username: string;
    password: string;
}

interface LoginBody {
    Uemail?: string;
    username?: string;
    password: string;
}

router.post('/register', async (req: Request<{}, {}, RegisterBody>, res: Response) => {
    try {
        const { Uname, Uemail, username, password } = req.body;

        if (!Uname || !Uemail || !username || !password) {
            return res.status(400).json({ message: 'All fields are required!' });
        }

        const existingUser = await User.findOne({ Uemail });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const existingUsername = await User.findOne({ username });
        if (existingUsername) {
            return res.status(400).json({ message: 'Username already exists!' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(password, salt);

        const newUser = new User({ Uname, Uemail, username, password: hashPass });
        await newUser.save();

        return res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        const message = err instanceof Error ? err.message : 'Unknown error';
        return res.status(500).json({ message: 'Server error', error: message });
    }
});

router.post('/login', async (req: Request<{}, {}, LoginBody>, res: Response) => {
    try {
        const { Uemail, username, password } = req.body;

        if (!Uemail && !username) {
            return res.status(400).json({ message: 'Email or username is required' });
        }

        const user: IUser | null = Uemail
            ? await User.findOne({ Uemail })
            : await User.findOne({ username });

        if (!user) {
            return res.status(400).json({ message: 'Invalid user' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        const jwtSecret = process.env.JWT_SECRET;
        if (!jwtSecret) {
            throw new Error('JWT_SECRET is not defined in environment variables');
        }

        const token = jwt.sign(
            { id: user._id, email: user.Uemail },
            jwtSecret,
            { expiresIn: '7d' }
        );

        return res.json({
            message: 'Login success',
            token,
            user: {
                id: user._id,
                name: user.Uname,
                email: user.Uemail,
                username: user.username,
            },
        });
    } catch (err) {
        const message = err instanceof Error ? err.message : 'Unknown error';
        return res.status(500).json({ message: 'Server error', error: message });
    }
});

export default router;