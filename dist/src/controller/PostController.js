"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PostService_1 = __importDefault(require("../services/PostService"));
const ControllerEnum_1 = __importDefault(require("../utils/ControllerEnum"));
class PostController {
    constructor(service = new PostService_1.default()) {
        this.service = service;
        this.errors = ControllerEnum_1.default;
        this.read = async (req, res) => {
            try {
                const posts = await this.service.read();
                return res.status(200).json(posts);
            }
            catch (err) {
                return res.status(500).json({ error: this.errors.internal });
            }
        };
        this.create = async (req, res) => {
            const { file } = req;
            try {
                const post = await this.service.create(file);
                if (!post) {
                    return res.status(500).json({ error: this.errors.internal });
                }
                if ('error' in post) {
                    return res.status(400).json(post);
                }
                return res.status(201).json(post);
            }
            catch (err) {
                return res.status(500).json({ error: this.errors.internal });
            }
        };
        this.readOne = async (req, res) => {
            const { id } = req.params;
            try {
                const post = await this.service.readOne(id);
                return post
                    ? res.status(200).json(post)
                    : res.status(404).json({ error: this.errors.notFound });
            }
            catch (error) {
                return res.status(500).json({ error: this.errors.internal });
            }
        };
        this.delete = async (req, res) => {
            const { id } = req.params;
            try {
                const post = await this.service.delete(id);
                if (post)
                    return res.status(200).json(post);
                return res.status(404).json({ error: this.errors.notFound });
            }
            catch (error) {
                return res.status(500).json({ error: this.errors.internal });
            }
        };
    }
}
exports.default = PostController;
