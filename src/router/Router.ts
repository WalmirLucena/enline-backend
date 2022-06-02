import { Router } from 'express';
import PostController from '../controller/PostController';

class MainRouter {
  public router: Router;

  constructor() {
    this.router = Router();
  }

  public addRoute(
    controller: PostController,
  ) {
    this.router.post('/post', controller.create);
    this.router.get('/post', controller.read);
    this.router.get('/post/:id', controller.readOne);
    this.router.delete('/post/:id', controller.delete);
  }
}

export default MainRouter;
