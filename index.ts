import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();

const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello and Welcome');
});

app.get('/users', (req: Request, res: Response) => {
    res.send('User Page');
});

app.listen(port, () => {
    console.log(`Server is running at {port}`);
});


