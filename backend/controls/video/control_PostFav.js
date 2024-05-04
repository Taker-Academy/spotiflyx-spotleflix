const Video = require("../../models/models_Video");
const User = require("../../models/models_User");
const toke = require("../../functionUtils/handlingToken");

function sendError(message)
{
    const response = {
        ok: false,
        error: message,
    };
    return response;
}

function sendResponse(message)
{
    const response = {
        ok: true,
        message: message,
    };
    return response;
}

async function errorForVideoId(body, res)
{
    if (!body) {
        res.status(400).json(sendError("Mauvaise requête, paramètres manquants ou invalides."));
        return 1;
    }
    if (!body.videoId) {
        res.status(400).json(sendError("Mauvaise requête, paramètres manquants ou invalides."));
        return 1;
    }
    if (typeof body.videoId !== "string") {
        res.status(400).json(sendError("Mauvaise requête, paramètres manquants ou invalides."));
        return 1;
    }
    const video = await Video.findOne({where : {id: body.videoId}});
    if (!video) {
        res.status(404).json(sendError("Vidéo non trouvé."));
        return 1;
    }
    return 0;
}

async function videoInFav(videoId, userId)
{
    const user = await User.findOne({where : {id: userId}});

    if (user) {
        user.favorites.push(videoId);
        await user.save();
    }
    return 0;
}

module.exports.setPostFavoris = async (req, res) => {
    const tokId = req.headers.authorization;
    const tokenNID = tokId && tokId.split(' ')[1];
    const resTok = await toke.verifyToken(tokenNID);

    try {
        if (resTok.code === 401) {
            res.status(401).json(sendError("Mauvais token JWT."));
            return;
        }
        const errorId = await errorForVideoId(req.body);
        if (errorId === 1) {
            return;
        }
        await videoInFav(eq.body.videoId, resTok.data.userId);
        res.status(201).json(sendResponse("Video in favorite"));
        return;
    } catch (error) {
        console.error('Erreur lors du traitement de la requête :', error);
        res.status(500).json(sendError("Erreur interne du serveur."));
        return;
    }
};