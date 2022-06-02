import express, { Router } from 'express';
import connectToDatabase from './models/connection';
import cors from 'cors';
import morgan from 'morgan';

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

  public addRouter(router: Router){
      this.app.use(router);
  }

 
}

export default App;
