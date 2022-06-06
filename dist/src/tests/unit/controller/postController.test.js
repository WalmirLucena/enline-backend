"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const Sinon = __importStar(require("sinon"));
const fileMock_1 = require("../../mocks/fileMock");
const PostController_1 = __importDefault(require("../../../controller/PostController"));
describe("Post Controller", () => {
    let Post = new PostController_1.default();
    describe('Create one Post by req.body', () => {
        const req = {};
        const res = {};
        beforeEach(() => {
            res.status = Sinon.stub().returns(res);
            res.json = Sinon.stub().returns(null);
            Sinon.stub(Post.service, 'create').resolves(fileMock_1.fileMock);
        });
        afterEach(() => {
            Sinon.restore();
        });
        it("Must return status 201", async () => {
            req.body = fileMock_1.fileMock;
            await Post.create(req, res);
            (0, chai_1.expect)(res.status.calledWith(201)).to.be.equal(true);
        });
    });
    describe('Read all Posts', () => {
        const req = {};
        const res = {};
        beforeEach(() => {
            res.status = Sinon.stub().returns(res);
            res.json = Sinon.stub().returns(null);
            Sinon.stub(Post.service, 'read').resolves(fileMock_1.fileMockList);
        });
        afterEach(() => {
            Sinon.restore();
        });
        it("Must return status 200", async () => {
            await Post.read(req, res);
            (0, chai_1.expect)(res.status.calledWith(200)).to.be.equal(true);
        });
    });
    describe('Delete one post by Id', () => {
        const id = fileMock_1.fileMock._id;
        const req = {};
        const res = {};
        beforeEach(() => {
            res.status = Sinon.stub().returns(res);
            res.json = Sinon.stub();
            Sinon.stub(Post.service, 'delete').resolves(fileMock_1.fileMock);
        });
        afterEach(() => {
            Sinon.restore();
        });
        it("Must return status 200", async () => {
            req.params = { id };
            await Post.delete(req, res);
            (0, chai_1.expect)(res.status.calledWith(200)).to.be.equal(true);
        });
    });
});
