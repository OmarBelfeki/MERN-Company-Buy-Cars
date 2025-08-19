const Evalution = require("../models/evalution")
const Testeur = require("../models/testeur");
const router = exports.Router();



router.post("/", async (req, res) => {
    const {idPermis, idModele} = req.body;

    try{
        const existTesteur = Testeur.findOne({idPermis: idPermis});
        if(!existTesteur) return res.status(404).json({message: "Testeur non inscrit"});
        const existEvalution = Evalution.find({idPermis: idPermis, idModele: idModele});
        if(existEvalution) return res.status(302).json({message: "Vous avez déjà testé ce modèle"});
        const elevation = Evalution.create(req.body);
        await elevation.save()
    }catch (e) {
        return res.status(500).json({message: e.message});
    }
})

module.exports = router;