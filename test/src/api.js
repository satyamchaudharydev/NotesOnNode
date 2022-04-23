const router = require("express").Router();
const books = require("./data");

let booksDirectory = books;

router.get("/reset", function (req, res) {
  booksDirectory = books;
  res.send("ok");
});

router.get("/books", function (req, res) {
  res.send(booksDirectory);
});

router.get("/books/:id", function (req, res) {
  // add code
  const id = req.params.id;
  const book = booksDirectory.find((book) => book.isbn === id);
  res.send(book);
});

router.post("/books", function (req, res) {
  const {
    title,
    isbn,
    pageCount,
    publishedDate,
    thumbnailUrl,
    shortDescription,
    longDescription,
    status,
    authors,
    categories,
  } = req.body;
  const book = {
    title,
    isbn,
    pageCount,
    publishedDate,
    thumbnailUrl,
    shortDescription,
    longDescription,
    status,
    authors,
    categories,
  };
  booksDirectory.push(book);
  res.send(book);
});

router.put("/books/:id", function (req, res) {
  const { id } = req.params;
  const {
    title,
    isbn,
    pageCount,
    publishedDate,
    thumbnailUrl,
    shortDescription,
    longDescription,
    status,
    authors,
    categories,
  } = req.body;

  const book = {
    title,
    isbn,
    pageCount,
    publishedDate,
    thumbnailUrl,
    shortDescription,
    longDescription,
    status,
    authors,
    categories,
  };
  const findBook = booksDirectory.find((book) => book.isbn === id);

  if (findBook) {
    findBook.title = title || findBook.title;
    findBook.isbn = isbn || findBook.isbn;
    findBook.pageCount = pageCount || findBook.pageCount;
    findBook.publishedDate = publishedDate || findBook.publishedDate;
    findBook.thumbnailUrl = thumbnailUrl || findBook.thumbnailUrl;
    findBook.shortDescription = shortDescription || findBook.shortDescription;
    findBook.longDescription = longDescription || findBook.longDescription;
    findBook.status = status || findBook.status;
    findBook.authors = authors || findBook.authors;
    findBook.categories = categories || findBook.categories;
    1;
    res.send(findBook);
  } else {
    res.status(404).send("not found");
  }
});

router.delete("/books/:id", function (req, res) {
  // add code
  const { id } = req.params;
  const isBook = booksDirectory.find((book) => book.isbn === id);
  if (isBook) {
    const books = booksDirectory.filter((book) => book.isbn !== id);
    res.send(books);
  }
  res.status(404).send("not found");
});

module.exports = router;
