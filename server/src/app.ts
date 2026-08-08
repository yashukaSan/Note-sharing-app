import express from 'express';

const app = express();

app.use(express.json());

//routes import
import userRouter from "./route/user.route";

//router declaration 
app.use("/api/v1/users", userRouter);

export default app;