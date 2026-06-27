const myLibrary = [];

const addButton = document.querySelector(".add-button");
const bookFormModal = document.querySelector("#book-adder");
const submitFormButton = document.querySelector(".submit-book-form");
const libraryContainer = document.querySelector("#library-container");

addButton.addEventListener("click", function () {
  bookFormModal.showModal();
})

submitFormButton.addEventListener("click", function (e) {
  e.preventDefault();
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");
  addBookToLibrary(title.value, author.value, pages.value);
  displayBooks(myLibrary);
  bookFormModal.close();
  bookFormModal.querySelector("form").reset();
})

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
  libraryContainer.textContent = "";
  for (const book of books) {

    const bookContainer = document.createElement("div");
    bookContainer.classList.add("book-container");

    const bookName = document.createElement("h2");
    const bookAuthor = document.createElement("h3");
    const bookPages = document.createElement("p");

    bookName.textContent = book.name;
    bookAuthor.textContent = book.author;
    bookPages.textContent = book.pages;

    bookContainer.append(bookName, bookAuthor, bookPages);
    libraryContainer.append(bookContainer);
  }
}