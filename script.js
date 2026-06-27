const myLibrary = [];

const addButton = document.querySelector(".add-button");
const bookFormModal = document.querySelector("#book-adder");
const submitFormButton = document.querySelector(".submit-book-form");
const libraryContainer = document.querySelector("#library-container");
const readButton = document.querySelector("#read");

addButton.addEventListener("click", function () {
  bookFormModal.showModal();
})

submitFormButton.addEventListener("click", function (e) {
  e.preventDefault();
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");
  const radioStatus = readButton.checked;

  addBookToLibrary(title.value, author.value, pages.value, radioStatus);
  displayBooks(myLibrary);
  bookFormModal.close();
  bookFormModal.querySelector("form").reset();
})

function Book(name, author, pages, status) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.id = crypto.randomUUID();
  this.status = status;
}

function addBookToLibrary(name, author, pages, status) {
  const book = new Book(name, author, pages, status);
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
    const readButton = document.createElement("button");
    readButton.classList.add("book-status");

    bookName.textContent = book.name;
    bookAuthor.textContent = book.author;
    bookPages.textContent = book.pages;

    if (book.status) {
      readButton.textContent = "Read";
    }
    else {
      readButton.textContent = "Not Read";
      readButton.classList.add("book-unread");
    }
    readButton.addEventListener("click", function () {
      readButton.classList.toggle("book-unread");
      if (readButton.textContent === "Read") {
        readButton.textContent = "Not Read";
        book.status = false;
      }
      else {
        readButton.textContent = "Read";
        book.status = true;
      }
    })

    bookContainer.append(bookName, bookAuthor, bookPages, readButton);
    libraryContainer.append(bookContainer);
  }
}