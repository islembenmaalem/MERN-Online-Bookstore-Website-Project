module.exports = (app) => {
    const books= require('../controllers/book.controllers.js');
    app.post('/books',books.creer); 
    app.get('/books',books.afficherTout);
    app.get('/books/:booktId',books.afficherUn);
    app.put('/books/:booktId',books.modifier);
    app.delete('/books/:booktId',books.supprimer)
}