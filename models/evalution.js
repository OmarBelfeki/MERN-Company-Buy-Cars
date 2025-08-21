const mongoose = require("mongoose");

const elevationSchema = mongoose.Schema({
    idPermis: {unique: true, type: String, maxlength: 8, required: true, description: "Numéro de permis d’un testeur.", ref: "testeur"},
    voiture: { type: mongoose.Schema.Types.ObjectId, ref: "modelVoiture", required: true },
    dateTest: {type: Date, description: "Date et heure d’un test effectué."},
    securite: {type: Number, description: "Note attribuée au critère 'sécurité'."},
    conduite: {type: Number, description: "Note attribuée au critère 'conduite'."},
    confort: {type: Number, description: "Note attribuée au critère 'confort'."},
})

module.exports = mongoose.model("evaluation", elevationSchema);
