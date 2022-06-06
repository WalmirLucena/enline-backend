"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
require("dotenv/config");
const Router_1 = __importDefault(require("./router/Router"));
const PostController_1 = __importDefault(require("./controller/PostController"));
const server = new app_1.default();
const postRoute = new Router_1.default();
const post = new PostController_1.default();
postRoute.addRoute(post);
server.addRouter(postRoute.router);
server.startServer(process.env.PORT);
exports.default = server;
