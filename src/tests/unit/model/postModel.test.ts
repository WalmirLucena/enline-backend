import { expect } from 'chai';
import * as Sinon from 'sinon';
import PostModel from '../../../models/PostModel';
import { fileBody, fileMock, fileMockList } from '../../mocks/fileMock';
import {Post} from '../../../interfaces/PostInterface';

describe('Post Model Test', () => {

  let Post = new PostModel();
  describe('Create a Post with correct data', () => {
    before(() => {
        Sinon.stub(Post.model, 'create').resolves(fileMock as any);
    });
  ;

  after(() => {
    Sinon.restore();
  });

  it('Return a new Post', async () => {
    const post = await Post.create(fileBody);
    expect(post).to.be.deep.equal(fileMock);
  });
  }
)

describe('Get Posts with correct data', () => {
  before(() => {
      Sinon.stub(Post.model, 'find').resolves(fileMockList);
  });


  after(() => {
    Sinon.restore();
  });

  it('Return a List of Posts', async () => {
    const post = await Post.read();
  expect(post).to.be.deep.equal(fileMockList);
  });
  })

describe('Delete one Post by Id', () => {
    describe('When the Post exist', () => {
        before(() => {
        Sinon.stub(Post.model, 'findByIdAndDelete').resolves(fileMock as any);
    });

    after(() => {
        Sinon.restore();
    });

    it('Must return empty', async () => {
        const postDeleted = await Post.delete(fileMock._id);
        expect(postDeleted).to.deep.equal(fileMock);
    })

})
});
});
