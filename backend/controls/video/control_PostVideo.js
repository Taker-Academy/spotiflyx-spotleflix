const Video = require("../../models/models_Video");

module.exports.setPostVideo = async (req, res) => {
    const body = req.body;
    try {
        res.status(200).json();
        return;
    } catch (error) {
        console.error('Erreur lors du traitement de la requête :', error);
        res.status(500).json(sendError("Erreur interne du serveur."));
        return;
    }
};