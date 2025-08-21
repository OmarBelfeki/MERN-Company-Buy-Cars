const express = require("express");
const router = express.Router();
const Evalution = require("../models/evalution");

router.get("/bilan", async (req, res) => {

    try{
        const stats = await Evalution.aggregate([
            {
                $group: {
                    _id: "$voiture",  // group by voiture ObjectId
                    avgSecurite: { $avg: "$securite" },
                    avgConduite: { $avg: "$conduite" },
                    avgConfort: { $avg: "$confort" },
                    nbrTests: { $sum: 1 }
                }
            },
            {
                $lookup: {
                    from: "modelvoitures",
                    localField: "_id",
                    foreignField: "_id",
                    as: "voiture"
                }
            },
            { $unwind: "$voiture" },
            {
                $project: {
                    _id: 0,
                    libelle: "$voiture.libelle",
                    avgSecurite: 1,
                    avgConduite: 1,
                    avgConfort: 1,
                    nbrTests: 1
                }
            }
        ]);

        console.log(stats);
        return res.status(200).json({stats: stats});

    }catch (e) {
        return res.status(501).json({message: e.message})
    }
})

module.exports = router