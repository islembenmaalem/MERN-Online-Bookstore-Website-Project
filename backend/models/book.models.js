const mongoose = require('mongoose');
const bookSchema = mongoose.Schema({
//Définir les champs
    BNom :String,
    BDate:String,
    Bprix:Number,
    Bgenre:String,
    Bpays:String,
     Bauteur:String,
    Blangue:String
}, { timestamps: true
/* Définir timestamps. Lorsqu’on l’active, Mongoose ajoute les propriétés
createdAt et updatedAt au schéma. */
});
module.exports = mongoose.model('book', bookSchema);