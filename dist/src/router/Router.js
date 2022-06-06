"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postValidations_1 = __importDefault(require("../middlewares/postValidations"));
class MainRouter {
    constructor() {
        this.router = (0, express_1.Router)();
    }
    addRoute(controller) {
        this.router.post('/post', postValidations_1.default, controller.create);
        this.router.get('/post', controller.read);
        this.router.get('/post/:id', controller.readOne);
        this.router.delete('/post/:id', controller.delete);
    }
}
exports.default = MainRouter;
