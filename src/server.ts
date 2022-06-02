import App from './app';

import 'dotenv/config';

const server = new App();

server.startServer(process.env.PORT);

export default server;
