const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

let books = [
    {
        isbn: '9781593275846',
        title: 'Eloquent JavaScript',
        author: 'Marijn Haverbeke',
        publish_date: '2014-12-14',
        publisher: 'No Starch Press',
        numOfPages: 472
    },
    {
        isbn: '9781491943533',
        title: 'Practical Modern JavaScript',
        author: 'Nicolás Bevacqua',
        publish_date: '2017-07-16',
        publisher: "O'Reilly Media",
        numOfPages: 334
    },
    {
        isbn: '9781593277574',
        title: 'Understanding ECMAScript 6',
        author: 'Nicholas C. Zakas',
        publish_date: '2016-09-03',
        publisher: 'No Starch Press',
        numOfPages: 352
    },
    {
        isbn: '9781449365035',
        title: 'Speaking JavaScript',
        author: 'Axel Rauschmayer',
        publish_date: '2014-04-08',
        publisher: "O'Reilly Media",
        numOfPages: 460
    },
    {
        isbn: '9781449331818',
        title: 'Learning JavaScript Design Patterns',
        author: 'Addy Osmani',
        publish_date: '2012-08-30',
        publisher: "O'Reilly Media",
        numOfPages: 254
    },
    {
        isbn: '9798602477429',
        title: "You Don't Know JS Yet",
        author: 'Kyle Simpson',
        publish_date: '2020-01-28',
        publisher: 'Independently published',
        numOfPages: 143
    },
    {
        isbn: '9781484200766',
        title: 'Pro Git',
        author: 'Scott Chacon and Ben Straub',
        publish_date: '2014-11-18',
        publisher: 'Apress; 2nd edition',
        numOfPages: 458
    },
    {
        isbn: '9781484242216',
        title: 'Rethinking Productivity in Software Engineering',
        author: 'Caitlin Sadowski, Thomas Zimmermann',
        publish_date: '2019-05-11',
        publisher: 'Apress',
        numOfPages: 310
    }
];

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post('/book', (req, res) => {
    const book = req.body;
    console.log(book);
    books.push(book);
    res.send('Book is added to the database');
});
app.get('/books', (req, res) => {
    res.json(books);
});
app.get('/book/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    const book = books.find(b => b.isbn === isbn);
    if (book) {
        res.json(book);
    } else {
        res.status(404).send('Book not found');
    }
});
app.put('/book/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    const newBook = req.body;
    let index = books.findIndex(b => b.isbn === isbn);
    if (index !== -1) {
        books[index] = newBook;
        res.send('Book is updated');
    } else {
        res.status(404).send('Book not found');
    }
});
app.delete('/book/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    books = books.filter(book => book.isbn !== isbn);
    res.send('Book is deleted');
});
app.listen(port, () => console.log(`Hello world app listening on port ${port}`));
