const express = require("express");
const Testeur = require("../models/testeur");
const router = express.Router();

router.get("/", async (req, res) => {
    return res.send("oamr")

})


router.post("/", async (req, res) => {
    const {idPermis} = req.body;
    try{
        const existsTesteur = await Testeur.findOne({idPermis: idPermis});
        if(existsTesteur) return res.status(400).json({message: "Numéro de permis déjà existant."})
        const newTesteur = await Testeur.create(req.body)
        res.json({testeur: newTesteur, message: "Enregistrement fait avec succès."})
    }catch (e) {
        res.status(500).json({ message: e.message });
    }
});


module.exports = router;

