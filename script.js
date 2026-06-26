const myLibrary = [];
const addButton = document.querySelector(".add-button");

Variables = {
  libraryContainer: document.querySelector("#library-container"),
}
function Book(name, author, pages) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(name, author, pages) {
  const book = new Book(name, author, pages);
  myLibrary.push(book);
}

function displayBooks(books) {
  for (book of books) {

    let bookContainer = document.createElement("div");
    let bookName = document.createElement("h2");
    let bookAuthor = document.createElement("h3");
    let bookPages = document.createElement("p");

    bookName.textContent = book.name;
    bookAuthor.textContent = book.author;
    bookPages.textContent = book.pages;

    bookContainer.append(bookName);
    bookContainer.append(bookAuthor);
    bookContainer.append(bookPages);
    Variables.libraryContainer.append(bookContainer);
  }
}
displayBooks(myLibrary);