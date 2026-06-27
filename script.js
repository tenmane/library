const myLibrary = [];

const addButton = document.querySelector(".add-button");
const bookFormModal = document.querySelector("#book-adder");
const bookForm = document.querySelector(".book-details");
const libraryContainer = document.querySelector("#library-container");
const readButton = document.querySelector("#read");

addButton.addEventListener("click", function () {
  bookFormModal.showModal();
})

bookForm.addEventListener("submit", function (e) {
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
  if (books.length === 0) {
    const emptyIndicator = document.createElement("p");
    emptyIndicator.classList.add("empty-indicator");
    emptyIndicator.textContent = "Your Library is Empty";
    libraryContainer.append(emptyIndicator);
    return;
  }
  for (const book of books) {

    const bookContainer = document.createElement("div");
    bookContainer.classList.add("book-container");

    const bookName = document.createElement("h2");
    const bookAuthor = document.createElement("h3");
    const bookPages = document.createElement("p");
    const readButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    readButton.classList.add("book-status");
    deleteButton.classList.add("delete-book");

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

    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click",function(e){
      
    })
    bookContainer.append(bookName, bookAuthor, bookPages, readButton, deleteButton);
    libraryContainer.append(bookContainer);
  }
}

displayBooks(myLibrary);