
/*
4. Test your Library Management System by performing the following actions:
Create an instance of the Library class.
Use the addBook() method to add several books to the library.
Use the searchBook() method to search for a specific book and display its information.
Use the displayBooks() method to display the list of available books in the library.
 */
// const lib=new Library();
// lib.addBook("Harry Potter","JK Rowling","Novel");
// lib.addBook("Book 2","Author 1","Drama");
// lib.addBook("Book 3","Author 2","Action");
// lib.searchBook("book");

class Library{
    #books;
    constructor(){
        this.#books=[];
    }
    getBooks(){
        return this.#books;
    }
    getBook(index){
        return this.#books[index];
    }
    addBook(title,author,genre){
        const book=new Book(title,author,genre);
        this.#books.push(book);
    }
    searchBook(title){
        const regex=new RegExp(`\\b${title}\\b`,'i');
        const result=this.#books.filter(book=>regex.test(book.getTitle()));
        result.map(book=>book.displayInfo());
        // console.log(result); 
        // result.displayInfo();
    }
    displayBooks(){
        this.#books.map(book=>{
            book.displayInfo();
            console.log("================");
        })
    }
}
class Book{
    #title;
    #author;
    #genre;
    #availability;
    constructor(title="",author="",genre=""){
        this.#title=title;
        this.#author=author;
        this.#genre=genre;
        this.#availability=true;
    }
    getTitle(){
        return this.#title;
    }
    getAuthor(){
        return this.#author;
    }
    getGenre(){
        return this.#genre;
    }
    getAvailability(){
        return this.#availability;
    }
    borrowBook(){
        if(this.#availability)
            this.#availability=false;        
    }
    returnBook(){
        if(!this.#availability)
            this.#availability=true;
    }
    displayInfo(){
        console.log("Title: "+this.#title);
        console.log("Author: "+this.#author);
        console.log("Genre: "+this.#genre);
        console.log("Availability: "+(this.#availability ? "Available" : "Borrowed") );
    }

}
// lib.displayBooks();
(function(){
    $(document).ready(function(){
        const lib=new Library();
        $('form').on("submit",function(event){
            event.preventDefault();
            const title = $("#title").val();
            const author = $("#author").val();
            const genre = $("#genre").val();
            lib.addBook(title,author,genre);
            displayBooks();
            $("#title").val("");
            $("#author").val("");
            $("#genre").val("");
        });
        $(document).on("click",".borrow-book",function(){
            // console.log($(this).data('index'));
            const index=$(this).data('index');
            const book=lib.getBook(index);
            book.borrowBook();
            displayBooks();
        });
        $(document).on("click",".return-book",function(){
            // console.log($(this).data('index'));
            const index=$(this).data('index');
            const book=lib.getBook(index);
            book.returnBook();
            displayBooks();
        });
        $('#showBook').on('shown.bs.modal',function(e){
            const button        = $(e.relatedTarget);
            const index         = button.data('index');
            const book          = lib.getBook(index);
            const title         = book.getTitle();
            const author        = book.getAuthor();
            const genre         = book.getGenre();
            const availability  = book.getAvailability();
            const html      = `
                                <p>Title: ${title}</p>
                                <p>Author: ${author}</p>
                                <p>Genre:  ${genre}</p>
                                <p>Available:  ${availability ? "Yes":"No" }</p>
                              `;
            const htmlFooter=` 
                                <button type="button" class="btn btn-secondary btn-sm m-0" data-bs-dismiss="modal">Close</button>
                                ${
                                availability ? 
                                `<button class="borrow-book btn btn-primary btn-sm" data-bs-dismiss="modal"  data-index=${index} >Borrow</button>`    
                                    : `<button class="return-book btn  btn-primary btn-sm" data-bs-dismiss="modal"  data-index=${index}>Return</button>`
                                }`
            $(this).find('.modal-body').html(html);
            $(this).find('.modal-footer').html(htmlFooter);;
        })  
        // function display books
        function displayBooks(){
            let html="";
            const books=lib.getBooks();
            books.map((book,index)=>{
                html+=`<div class="col-md-3" >
                            <div class="card p-2">
                                <div class="">Title: ${book.getTitle()}</div>
                                ${
                                    book.getAvailability() ? 
                                    `<button class="borrow-book btn mt-3 btn-primary btn-sm"  data-index=${index} >Borrow</button>`    
                                    : `<button class="return-book btn mt-3 btn-primary btn-sm"  data-index=${index}>Return</button>`
                                    
                                }
                                <button class="show-book btn mt-3 btn-info btn-sm" data-index=${index} data-bs-toggle="modal" data-bs-target="#showBook">Show</button>
                            </div>
                        </div>`
                $('div#list-books').html(html);
            })
        }

     })
})(Library,Book)