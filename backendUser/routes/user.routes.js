module.exports = (app) => {
    const users= require('../controllers/user.controllers.js');
    app.post('/users',users.creer); 
    app.get('/users',users.afficherTout);
    app.get('/users/:userId',users.afficherUn);
    app.put('/users/:userId',users.modifier);
    app.delete('/users/:userId',users.supprimer)
}