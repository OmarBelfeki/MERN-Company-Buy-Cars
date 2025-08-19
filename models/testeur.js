const mongoose = require("mongoose");

const testeurSchema = new mongoose.Schema({
    idPermis: {unique: true, type: String, maxlength: 8, required: true, description: "Numéro de permis d’un testeur."},
    nom: {type: String, required: true, maxlength: 20, description: "Nom d’un testeur."},
    prenom: {type: String, required: true, maxlength: 20, description: "Prénom d’un testeur."},
    genre: {type: String, maxlength: 1, required: true, description: "Genre d’un testeur (F : Féminin , M : Masculin)."}
})

module.exports = mongoose.model("testeur", testeurSchema);