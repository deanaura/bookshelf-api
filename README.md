
# 📚 Bookshelf API

A simple and clean Bookshelf REST API built using Node.js and Hapi.js, designed to handle book data with full CRUD operations. This project fulfills the technical specifications such as data validation, consistent response formats, and server behavior required by backend API standards.


## 🚀 Features

 - Add a new book
 - Retrieve all books (with optional filtering)
 - Get detailed information of a book by its ID
 - Update an existing book
 - Delete a book
 - Fully follows the response structure and validation rules described in the project requirements
 - Uses in-memory storage (no database required)
 - CORS enabled for development

## 🛠️ Tech Stack

- Node.js
- Hapi.js — routing & server framework
- nanoid@3 — unique ID generator
- JavaScript (CommonJS modules)


## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
  git clone https://github.com/deanaura/bookshelf-api.git
  cd bookshelf-api
```

### 2. Install dependencies

```bash
  npm install
```

### 3. Run the server

```bash
  npm run start
```

The server will start on:

```bash
  http://localhost:9000
```

    
## 🔌 API Endpoints
Below is a complete list of routes with their expected behaviors and responses.

### Add a New Book

```http
  POST /books
```
#### Request Body
```http
  {
  "name": "Book Title",
  "year": 2021,
  "author": "Author Name",
  "summary": "Book summary",
  "publisher": "Publisher Name",
  "pageCount": 300,
  "readPage": 120,
  "reading": true
  }
```
#### Success Responses (201)
```http
  {
    "status": "success",
    "message": "Buku berhasil ditambahkan",
    "data": {
        "bookId": "generated_id"
    }
  }

```
#### Failure Responses
| Condition | Status     | Message                |
| :-------- | :------- | :------------------------- |
| `name` is missing | `400` | "Gagal menambahkan buku. Mohon isi nama buku" |
| `readPage > pageCount` | `400` | "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount" |


### Get All Books

```http
  GET /books
```

#### Success Responses (200)
```http
  {
    "status": "success",
    "data": {
        "books": [
        {
            "id": "bookId",
            "name": "Book Title",
            "publisher": "Publisher Name"
        }
        ]
    }
  }
```
#### Optional Query Filters
| Query | Example    | Behavior               |
| :-------- | :------- | :------------------------- |
| `name` | `/books?name=buku` | Case-insensitive title search |
| `reading` | `/books?reading=1` | Show only books currently being read |
| `finished` | `/books?finished=1` | Show only finished books |


### Get Book Detail

```http
  GET /books/{bookId}
```

#### Success Responses (200)
```http
  {
    "status": "success",
    "data": {
        "book": {
        "id": "bookId",
        "name": "Book Title",
        "year": 2021,
        "author": "Author",
        "summary": "Summary",
        "publisher": "Publisher",
        "pageCount": 200,
        "readPage": 100,
        "finished": false,
        "reading": false,
        "insertedAt": "timestamp",
        "updatedAt": "timestamp"
        }
    }
  }
```

#### Failure Responses (404)
```http
  {
    "status": "fail",
    "message": "Buku tidak ditemukan"
  }

```

### Update Book

```http
  PUT /books/{bookId}
```
#### Request Body
```http
  {
  "name": "Book Title",
  "year": 2021,
  "author": "Author Name",
  "summary": "Book summary",
  "publisher": "Publisher Name",
  "pageCount": 300,
  "readPage": 120,
  "reading": true
  }
```
#### Success Responses (200)
```http
  {
    "status": "success",
    "message": "Buku berhasil diperbarui"
  }
```
#### Failure Responses
| Condition | Status     | Message                |
| :-------- | :------- | :------------------------- |
| `name` missing | `400` | "Gagal memperbarui buku. Mohon isi nama buku" |
| `readPage > pageCount` | `400` | "Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount" |
| ID not found | `404` | "Gagal memperbarui buku. Id tidak ditemukan" |


### Delete Book

```http
  DELETE /books/{bookId}
```

#### Success Responses (200)
```http
  {
    "status": "success",
    "message": "Buku berhasil dihapus"
  }
```

#### Failure Responses (404)
```http
  {
    "status": "fail",
    "message": "Buku gagal dihapus. Id tidak ditemukan"
  }

```

## 📄 Notes
- This API uses in-memory storage, meaning all data resets when the server restarts.

- Designed for learning, testing, and completing backend submission projects.

- Strictly follows required validation and response schemas.
