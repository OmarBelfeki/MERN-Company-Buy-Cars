const mongoose = require("mongoose");

const voitureSchema = mongoose.Schema({
    idModele: {type: Number, required: true, unique: true, description: "Identifiant d’un modèle de voiture à tester."},
    libelle: {type: String, required: true, maxlength: 20, description: "Libellé d’un modèle de voiture à tester."}
})

module.exports = mongoose.model("modelVoiture", voitureSchema);