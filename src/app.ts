import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { userRoute } from './app/modules/Users/user-route';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use('/api/users', userRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('The Server is successfully running!');
});

app.all('*', (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'This page is not found',
    error: {
      code: 404,
      description: 'This page is not found',
    },
  });
});

export default app;
