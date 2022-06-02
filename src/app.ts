import express from 'express';
import cors from 'cors';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(cors());
    
  }

  public startServer(PORT: String | number = 3001): void {
    this.app.listen(PORT, () => console.log(`Server running here http://localhost:${PORT}`));
  }

 
}

export default App;
