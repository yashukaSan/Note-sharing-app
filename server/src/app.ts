import express, {Request, Response} from 'express';
import cors from 'cors'
import userRouter from "./route/user.route";
import cookieParser from 'cookie-parser';

import router from './route/auth';

const app = express();

app.use(cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', router);

app.get('/', (req: Request, res: Response) => {
    res.send("Server is alive and running");
});

//router declaration 
app.use("/api/v1/users", userRouter);

export default app;