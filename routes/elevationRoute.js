const express = require("express");
const Evalution = require("../models/evalution")
const Testeur = require("../models/testeur");
const Voiture = require("../models/modelVoiture");
const router = express.Router();



router.post("/", async (req, res) => {
    const {idPermis, idModele} = req.body;

    try{
        const existTesteur = await Testeur.findOne({idPermis});
        if(!existTesteur) return res.status(404).json({message: "Testeur non inscrit"});
        const voiture = await Voiture.findOne({idModele})
        const existEvalution = await Evalution.findOne({idPermis, voiture: voiture._id});
        if(existEvalution) return res.status(302).json({message: "Vous avez déjà testé ce modèle"});
        const elevation = await Evalution.create({...req.body, voiture: voiture._id});
        return res.status(201).json({evalu: elevation, message: "Evaluation enregistrée avec succès"})
    }catch (e) {
        return res.status(500).json({message: e.message});
    }
})

module.exports = router;