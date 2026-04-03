const chai = require("chai");
const sinon = require("sinon");
const mongoose = require("mongoose");

const Book = require("../models/Book");
const {
  createBook,
  getBooks,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

const expect = chai.expect;

describe("Book Controller Tests", () => {

  afterEach(() => {
    sinon.restore();
  });

  // ================= CREATE =================
  describe("Create Book Test", () => {

    it("should create a new book successfully", async () => {
      const req = {
        body: {
          title: "Harry Potter",
          author: "J.K. Rowling",
          year: 2001
        }
      };

      const createdBook = {
        _id: new mongoose.Types.ObjectId(),
        ...req.body
      };

      sinon.stub(Book.prototype, "save").resolves(createdBook);

      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.spy()
      };

      await createBook(req, res);

      expect(res.status.calledWith(201)).to.be.true;
      expect(res.json.calledWith(createdBook)).to.be.true;
    });

    it("should return 500 if error occurs", async () => {
      sinon.stub(Book.prototype, "save").throws(new Error("DB Error"));

      const req = { body: {} };

      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.spy()
      };

      await createBook(req, res);

      expect(res.status.calledWith(500)).to.be.true;
    });

  });

  // ================= GET =================
  describe("Get Book Test", () => {

    it("should return all books", async () => {
      const fakeBooks = [{ title: "Test Book" }];

      sinon.stub(Book, "find").resolves(fakeBooks);

      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.spy()
      };

      await getBooks({}, res);

      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWith(fakeBooks)).to.be.true;
    });

    it("should return 500 on error", async () => {
      sinon.stub(Book, "find").throws(new Error("DB Error"));

      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.spy()
      };

      await getBooks({}, res);

      expect(res.status.calledWith(500)).to.be.true;
    });

  });

  // ================= UPDATE =================
  describe("Update Book Test", () => {

    it("should update book successfully", async () => {
      const bookId = new mongoose.Types.ObjectId();

      const req = {
        params: { id: bookId },
        body: { title: "Updated Book" }
      };

      sinon.stub(Book, "findByIdAndUpdate").resolves({ ...req.body });

      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.spy()
      };

      await updateBook(req, res);

      expect(res.status.calledWith(200)).to.be.true;
    });

    it("should return 404 if book not found", async () => {
      sinon.stub(Book, "findByIdAndUpdate").resolves(null);

      const req = { params: { id: "123" }, body: {} };

      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.spy()
      };

      await updateBook(req, res);

      expect(res.status.calledWith(404)).to.be.true;
    });

  });

  // ================= DELETE =================
  describe("Delete Book Test", () => {

    it("should delete a book successfully", async () => {
      sinon.stub(Book, "findByIdAndDelete").resolves({});

      const req = { params: { id: "123" } };

      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.spy()
      };

      await deleteBook(req, res);

      expect(res.status.calledWith(200)).to.be.true;
    });

    it("should return 404 if book not found", async () => {
      sinon.stub(Book, "findByIdAndDelete").resolves(null);

      const req = { params: { id: "123" } };

      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.spy()
      };

      await deleteBook(req, res);

      expect(res.status.calledWith(404)).to.be.true;
    });

  });

});