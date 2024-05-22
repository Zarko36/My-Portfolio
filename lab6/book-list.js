async function loadBooks() {
    try {
        let response = await fetch("http://localhost:3000/books");
        console.log(response.status);
        console.log(response.statusText);
        if (response.status === 200) {
            let data = await response.json();
            const books = data;
            let booksHTML = '';
            for (let book of books) {
                const x = `
                    <div class="col-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${book.title}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">${book.isbn}</h6>
                                <div>Author: ${book.author}</div>
                                <div>Publisher: ${book.publisher}</div>
                                <div>Number Of Pages: ${book.numOfPages}</div>
                                <hr>
                                <button type="button" class="btn btn-danger" onClick="deleteBook('${book.isbn}')">Delete</button>
                                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editBookModal" onClick="setEditModal('${book.isbn}')">Edit</button>
                            </div>
                        </div>
                    </div>
                `;
                booksHTML += x;
            }
            document.getElementById('books').innerHTML = booksHTML;
        }
    } 
    catch (error) {
        console.error('ERROR (FETCHING BOOKS):', error);
    }
}
async function deleteBook(isbn) {
    try {
        let response = await fetch(`http://localhost:3000/book/${isbn}`, { method: 'DELETE' });
        if (response.status === 200) {
            console.log('Book deletion successful');
            loadBooks();
        } 
        else { console.error('Book deletion failed'); }
    } 
    catch (error) { console.error('ERROR (DELETING BOOK):', error); }
}
async function setEditModal(isbn) {
    try {
        let response = await fetch(`http://localhost:3000/book/${isbn}`);
        if (response.status === 200) {
            let book = await response.json();
            const { title, author, publisher, publish_date, numOfPages } = book;
            document.getElementById('isbn').value = isbn;
            document.getElementById('title').value = title;
            document.getElementById('author').value = author;
            document.getElementById('publisher').value = publisher;
            document.getElementById('publish_date').value = publish_date;
            document.getElementById('numOfPages').value = numOfPages;
            document.getElementById('editForm').action = `http://localhost:3000/book/${isbn}`;
        }
    } 
    catch (error) { console.error('ERROR (FETCHING BOOKS):', error); }
}
async function updateBook(event) {
    event.preventDefault();
    const isbn = document.getElementById('isbn').value;
    const book = {
        isbn,
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        publisher: document.getElementById('publisher').value,
        publish_date: document.getElementById('publish_date').value,
        numOfPages: document.getElementById('numOfPages').value
    };
    try {
        let response = await fetch(`http://localhost:3000/book/${isbn}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(book) });
        if (response.status === 200) {
            console.log('Book updated');
            loadBooks();
        } 
        else { console.error('Failed to update book'); }
    } 
    catch (error) { console.error('Error updating book:', error); }
}
document.getElementById('editForm').addEventListener('submit', updateBook);
loadBooks();
