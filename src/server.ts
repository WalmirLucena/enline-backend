import App from './app';

import 'dotenv/config';
import MainRouter from './router/Router';
import PostController from './controller/PostController';

const server = new App();

const postRoute = new MainRouter();
const post = new PostController();

postRoute.addRoute(post);
server.addRouter(postRoute.router);

server.startServer(process.env.PORT);

export default server;
