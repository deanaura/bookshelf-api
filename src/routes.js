const booksHandler = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: booksHandler.addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: booksHandler.getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: booksHandler.getBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: booksHandler.editBookByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: booksHandler.deleteBookByIdHandler,
  },
];

module.exports = routes;