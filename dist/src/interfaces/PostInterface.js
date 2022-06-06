"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostSchema = void 0;
const zod_1 = require("zod");
const PostSchema = zod_1.z.object({
    name: zod_1.z.string(),
    size: zod_1.z.number(),
    key: zod_1.z.string(),
    url: zod_1.z.string(),
    createdAt: zod_1.z.date(),
});
exports.PostSchema = PostSchema;
