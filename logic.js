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


//create new div, insert book, add to DOM
function displayLibraryTableInPage(){
    const display = document.querySelector("#bookContainer");
    
    library.forEach((book) => {
        let div = document.createElement("div");
        let textDiv = document.createElement("div");
        let checkboxDiv = document.createElement("div");
        
        //create checkbox element for each added book
        let checkbox = document.createElement("INPUT");
        checkbox.setAttribute("type", "checkbox");
        

        checkboxDiv.id = "checkboxDiv";
        div.className = "book";
        textDiv.className = "bookDivText";
        checkbox.className = "checkbox"; 

        //add event handler to checkbox
        checkbox.addEventListener("click", () => {
            changeReadStatus(checkboxDiv, book);
        })

        //check or uncheck checkbox on inital display
        if(book.readStatus == true){
            checkbox.checked = true;
        }
        checkboxDivColor(checkbox.checked, checkboxDiv);
        
        textDiv.textContent = "Title: " + book.title + "\n" +  "Author: " + book.author + "\n" + 
                        "Length: " + book.pages;
        
        //style the new divs
        div.style.display = "grid";
        div.style.gridTemplateColumns = "auto auto"
        
        checkboxDiv.style.marginRight = "385px";
        checkboxDiv.style.cssFloat = "right";
        checkboxDiv.style.border = "solid";
        
        
        textDiv.style.marginLeft = "415px";
        textDiv.style.border = "solid";
        textDiv.style.width = "400px";
        
        //append all new elements to DOM
        checkboxDiv.appendChild(checkbox);
        div.appendChild(textDiv);                
        div.appendChild(checkboxDiv);
        display.appendChild(div);
    });
}


function buttonClicked(){
    clearDisplay();
    
    const title = document.querySelector("#titleInput");
    const author = document.querySelector("#authorInput");
    const length = document.querySelector("#lengthInput");
    const status = document.querySelector("#statusInput");
    
    if(checkInputs()){
        const book = new Book(title.value, author.value, length.value, status.checked);
        addBookToLibrary(book);
    } else{
        displayLibraryTableInPage();
        alert("You cannot leave empty fields!");
    }


    //reset inputs
    title.value = "";
    author.value = "";
    length.value = "";
    status.checked = false;
}


//check for no empty inputs
function checkInputs(){
    let status = true;
    const inputs = document.querySelectorAll(".input");
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


function checkboxDivColor(checked, checkboxDiv){
    if(checked){
        checkboxDiv.style.backgroundColor = "green";
    } else{
        checkboxDiv.style.backgroundColor = "red";
    }
}

function changeReadStatus(checkboxDiv, book){
    if(!book.readStatus){
        checkboxDiv.style.backgroundColor = "green";
        book.readStatus = true;
    } else{
        checkboxDiv.style.backgroundColor = "red";
        book.readStatus = false;
    }
}
