const myLibrary = [];

const libContainer = document.querySelector('.library-container')
const newBookForm = document.querySelector('#new-book-form')

function Book(title, author, pages, read) {
    //the constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = `"${title}" by ${author}, ${pages} pages, ${read}`
    myLibrary.push(this);
}

function addBookToLibrary(formProps) {
    new Book(formProps.title, formProps.author, formProps.pages, formProps.read);
}

const book1 = new Book('The Screwtape Letters', 'C.S. Lewis', '224', 'not yet read')
const book2 = new Book('Can\'t Hurt Me', 'David Goggins', '364', 'not yet read')

//function loops through the array and displays each book on the page

function displayBooks(){
    myLibrary.forEach((book)=>{
        //CREATE book container
        const bookBox = document.createElement('div')
        bookBox.className = "book-container"
        //CREATE book info element
        const bookInfo = document.createElement('p')
        bookInfo.className = "book-info"
        bookInfo.innerText = book.info
        //CREATE delete button
        const deleteBtn = document.createElement('button')
        deleteBtn.innerText = "Delete"
        //ADD btn function
        deleteBtn.addEventListener('click',()=>{
            bookBox.remove();
        //REMOVE book from myLibrary array
            //FIND index
            let index = myLibrary.map(book => book.title).indexOf(`${book.title}`);
            //REMOVE from myLibrary array
            myLibrary.splice(index,1);
        })
        //APPEND btn element into container
        bookBox.appendChild(deleteBtn)
        //APPEND element into container
        bookBox.appendChild(bookInfo)
        //APPEND container into libContainer
        libContainer.appendChild(bookBox)
    });
}

newBookForm.addEventListener("submit", function(e){
    e.preventDefault();

    let formData = new FormData(newBookForm);
    let formProps = Object.fromEntries(formData)

    addBookToLibrary(formProps)

    newBookForm.reset();

    libContainer.innerHTML = ""

    displayBooks();
})


displayBooks()