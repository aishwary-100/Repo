const MyBook = require('../models/MyBook');

exports.getMyBooks = async (req, res) => {
  const books = await MyBook.find({ userId: req.userId }).populate('bookId');
  res.json(books);
};

exports.addBookToMyList = async (req, res) => {
  const book = await MyBook.create({ userId: req.userId,...req.body });
  res.json(book);
};

exports.updateStatus = async (req, res) => {
  const { status } = req.body;
  await MyBook.findOneAndUpdate({ userId: req.userId, bookId: req.params.bookId }, { status });
  res.json({ message: 'Status updated' });
};

exports.updateRating = async (req, res) => {
  const { rating } = req.body;
  await MyBook.findOneAndUpdate({ userId: req.userId, bookId: req.params.bookId }, { rating });
  res.json({ message: 'Rating updated' });
};
