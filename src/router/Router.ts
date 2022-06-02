import { Router } from 'express';
import PostController from '../controller/PostController';
import uploadFile from '../middlewares/postValidations';

class MainRouter {
  public router: Router;

  constructor() {
    this.router = Router();
  }

  public addRoute(
    controller: PostController,
  ) {
    this.router.post('/post', uploadFile, controller.create);
    this.router.get('/post', controller.read);
    this.router.get('/post/:id', controller.readOne);
    this.router.delete('/post/:id', controller.delete);
  }
}

export default MainRouter;
