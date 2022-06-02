import express, { Router } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import connectToDatabase from './models/connection';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(morgan('dev'));
  }

  public startServer(PORT: String | number = 3001): void {
    connectToDatabase();
    this.app.listen(PORT, () => console.log(`Server running here http://localhost:${PORT}`));
  }

  public addRouter(router: Router) {
    this.app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')));
    this.app.use(router);
  }
}

export default App;
