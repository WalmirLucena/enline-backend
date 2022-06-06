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
const PostModel_1 = __importDefault(require("../../../models/PostModel"));
const fileMock_1 = require("../../mocks/fileMock");
describe('Post Model Test', () => {
    let Post = new PostModel_1.default();
    describe('Create a Post with correct data', () => {
        before(() => {
            Sinon.stub(Post.model, 'create').resolves(fileMock_1.fileMock);
        });
        ;
        after(() => {
            Sinon.restore();
        });
        it('Return a new Post', async () => {
            const post = await Post.create(fileMock_1.fileBody);
            (0, chai_1.expect)(post).to.be.deep.equal(fileMock_1.fileMock);
        });
    });
    describe('Get Posts with correct data', () => {
        before(() => {
            Sinon.stub(Post.model, 'find').resolves(fileMock_1.fileMockList);
        });
        after(() => {
            Sinon.restore();
        });
        it('Return a List of Posts', async () => {
            const post = await Post.read();
            (0, chai_1.expect)(post).to.be.deep.equal(fileMock_1.fileMockList);
        });
    });
    describe('Delete one Post by Id', () => {
        describe('When the Post exist', () => {
            before(() => {
                Sinon.stub(Post.model, 'findByIdAndDelete').resolves(fileMock_1.fileMock);
            });
            after(() => {
                Sinon.restore();
            });
            it('Must return empty', async () => {
                const postDeleted = await Post.delete(fileMock_1.fileMock._id);
                (0, chai_1.expect)(postDeleted).to.deep.equal(fileMock_1.fileMock);
            });
        });
    });
});
