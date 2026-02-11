import express, {
  type Express,
  Request,
  Response,
  NextFunction,
} from 'express';
import menuRouter from './routers/menu.router';
import authRouter from './routers/auth.router';
import cors from 'cors';
import { corsOptions } from './configs/cors.config';
import cookieParser from 'cookie-parser';

const app: Express = express();
const port = 8080;
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api/menus', menuRouter);
app.use('/api/auth', authRouter);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.expose === true ? err.statusCode : 500;
  console.log(err);
  const message = err.expose === true ? err.message : 'Something went wrong';

  res.status(statusCode).json({
    success: false,
    message,
    data: null,
  });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
