const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
//Définir les champs
UNom :String,
    Uprenom:String,
    Uemail:String,
    Umdp:String,
    
}, { timestamps: true
/* Définir timestamps. Lorsqu’on l’active, Mongoose ajoute les propriétés
createdAt et updatedAt au schéma. */
});
module.exports = mongoose.model('user', userSchema);