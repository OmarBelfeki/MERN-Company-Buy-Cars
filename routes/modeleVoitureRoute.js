const express = require("express");
const router = express.Router();
const modeleVoiture = require("../models/modelVoiture");


router.post("/", async (req, res) => {
    try{
        const voiture = await modeleVoiture.create(req.body);
        return res.status(201).json({voiture: voiture})
    }catch (e) {
        return res.status(500).json({message: e.message})
    }
})

module.exports = router