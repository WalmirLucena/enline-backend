"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PostModel_1 = __importDefault(require("../models/PostModel"));
class PostService {
    constructor(model = new PostModel_1.default()) {
        this.model = model;
    }
    async read() {
        const items = await this.model.read();
        return items;
    }
    async create(obj) {
        const item = await this.model.create(obj);
        return item;
    }
    async readOne(id) {
        const item = await this.model.readOne(id);
        return item;
    }
    async delete(id) {
        const item = await this.model.delete(id);
        return item;
    }
}
exports.default = PostService;
