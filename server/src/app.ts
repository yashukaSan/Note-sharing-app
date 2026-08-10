import express, {Request, Response} from 'express';
import cors from 'cors'
import userRouter from "./route/user.route";


import router from './route/auth'

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', router);

app.get('/', (req: Request, res: Response) => {
    res.send("Server is alive and running");
});

app.post('/api/register', (req: Request, res: Response) => {
    const { Uname, Uemail, username, password } = req.body;

    console.log('received Registration Data: ', { Uname, Uemail, username });

    if(!Uemail || !password || !username) {
        return res.status(400).json({ message: "Email, username, and password are required"});
    }

    return res.status(200).json({
        message: "Everything is OKAY, registration successful",
        user: {Uname, Uemail, username}
    });
});

//router declaration 
app.use("/api/v1/users", userRouter);

export default app;