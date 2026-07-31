import express from 'express';
import type { Express, Response, Request } from 'express';
import path from 'path';

const app: Express = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/',(req: Request, res: Response) => {
    res.send('Heloo there something will go');
})

// app.get('/api/users', (req: Request, res: Response) => {
//     res.json([
//         {
//             id: 1, name: "Yogesh"
//         },
//         {
//             id: 2, name: "Yashuka"
//         },
//     ]);
// });

// const clientBuildPath = path.join(__dirname, '../../client/dist');
// app.use(express.static(clientBuildPath));

// app.get('*', (req: Request, res: Response) => {
//     res.sendFile(path.join(clientBuildPath, 'index.html'));
// });



app.listen(PORT, ()=> {
    console.log("Server starts on port 8080");
})