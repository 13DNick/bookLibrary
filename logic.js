let library = [];

const hobbit = new Book("The Hobbit", "Tolkien", "420", false);
const harryPotter = new Book ("Harry Potter and The Goblet of Fire", "J.K Rowlings", "421", true);
const demonKing = new Book ("The Demon King", "Cinda Williams Chima", "469", true);
const eragon = new Book ("Eragon", "Christopher Paolini", "6969", true);


//add books to library
library.push(hobbit);
library.push(harryPotter);
library.push(demonKing);
library.push(eragon);


//populate page with inital library
displayLibraryTableInPage();


//constructor
function Book(title, author, pages, readStatus){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus; 
}

//add event listener to button
const button = document.querySelector("#button");
button.addEventListener("click", () => {
    buttonClicked();
})

function addBookToLibrary(book){
    library.push(book);
    displayLibraryTableInPage();
}

function printLibrary(){
    library.forEach((book) =>{
         console.log(book.title);
    }); 
}

function displayLibraryTableInPage(){
    const display = document.querySelector("#bookContainer");
    
    library.forEach((book) => {
        let div = document.createElement("div");
        div.className = "book"; 
        div.textContent = "Title: " + book.title + "\n" +  "Author: " + book.author + "\n" + 
                        "Length: " + book.pages + "\n" + "Read it?: " + book.readStatus;
        display.appendChild(div);
    });
}


function buttonClicked(){
    clearDisplay();
    
    const title = document.querySelector("#titleInput");
    const author = document.querySelector("#authorInput");
    const length = document.querySelector("#lengthInput");
    const status = document.querySelector("#statusInput");
    
    if(checkInputs){
        const book = new Book(title.value, author.value, length.value, status.value);
        addBookToLibrary(book);
    }

    title.value = "";
    author.value = "";
    length.value = "";
    status.value = "";
}


//check for no empty inputs
function checkInputs(){
    let status = true;
    const inputs = document.querySelectorAll(input);
    inputs.forEach(input => {
        if(input.value == ""){
            status = false;
        }
    })
    return status;
}


function clearDisplay(){
    const children = document.querySelectorAll(".book");

    children.forEach((child) => {
        child.remove();
    })

}
