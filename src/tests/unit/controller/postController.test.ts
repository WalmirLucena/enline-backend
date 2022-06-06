import { expect } from 'chai';
import * as Sinon from 'sinon';
import { Request, Response } from 'express';
import { fileBody, fileMock, fileMockList } from '../../mocks/fileMock';
import PostController from '../../../controller/PostController';


describe("Post Controller", () => {
    let Post = new PostController();
    
    describe('Create one Post by req.body', () => {
        const req = {} as Request;
        const res = {} as Response;
        beforeEach(() => {
            res.status = Sinon.stub().returns(res);
            res.json = Sinon.stub().returns(null);
            Sinon.stub(Post.service, 'create').resolves(fileMock as any);
        });

        afterEach(() => {
            Sinon.restore();
        })

        it("Must return status 201", async () => {
            req.body = fileMock;
            await Post.create(req, res);
            expect((res.status as Sinon.SinonStub).calledWith(201)).to.be.equal(true);
        })
    })

    describe('Read all Posts', () => {
        const req = {} as Request;
        const res = {} as Response;
        beforeEach(() => {
            res.status = Sinon.stub().returns(res);
            res.json = Sinon.stub().returns(null);
            Sinon.stub(Post.service, 'read').resolves(fileMockList as any[]);

        });

        afterEach(() => {
            Sinon.restore();
        })

        it("Must return status 200", async () => {
            await Post.read(req, res);
            expect((res.status as Sinon.SinonStub).calledWith(200)).to.be.equal(true);
        })
    })


    describe('Delete one post by Id', () => {
        const id = fileMock._id;
        const req = {} as Request<{id:string}>;
        const res = {} as Response;
        beforeEach(() => {
            res.status = Sinon.stub().returns(res);
            res.json = Sinon.stub();
            Sinon.stub(Post.service, 'delete').resolves(fileMock as any);

        });

        afterEach(() => {
            Sinon.restore();
        })

        it("Must return status 200", async () => {
            req.params = {id};

            await Post.delete(req, res);
            expect((res.status as Sinon.SinonStub).calledWith(200)).to.be.equal(true);
        })
    })
})