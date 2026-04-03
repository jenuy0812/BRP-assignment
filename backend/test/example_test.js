const chai = require("chai");
const sinon = require("sinon");
const mongoose = require("mongoose");

const Book = require("../models/Book");
const { createBook } = require("../controllers/bookController");

const expect = chai.expect;

describe("Create Book Test", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("should create a new book successfully", async () => {
    const req = {
      user: { id: new mongoose.Types.ObjectId() },
      body: {
        title: "Harry Potter",
        author: "J.K. Rowling",
        year: 2001,
      },
    };

    const createdBook = {
      _id: new mongoose.Types.ObjectId(),
      ...req.body,
      userId: req.user.id,
    };

    sinon.stub(Book.prototype, "save").resolves(createdBook);

    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };

    await createBook(req, res);

    expect(res.status.calledWith(201)).to.be.true;
    expect(res.json.calledOnce).to.be.true;
    expect(res.json.firstCall.args[0]).to.deep.equal(createdBook);
  });
});