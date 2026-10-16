import { Router, Request, Response } from "express";
import { User }from "../models/user.model";

const routerData = Router();

// GET /api/users -> Get all users
routerData.get("/", async (req: Request, res: Response) => {
    try {
        const users = await User.find({}); // {} means "no filter" = get all
        res.status(200).json({
            success: true,
            count: users.length,
            data: users
        });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

export default routerData;