const User = require("../../models/models_User");
const Favorite = require("../../models/models_Fav");
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

function getVideoIdFromUrl(url) {
    const match = url.match(/[?&]v=([^&]+)/);
    return match && match[1] ? match[1] : null;
}

async function errorForVideoId(body, userId, res)
{
    if (!body) {
        res.status(400).json(sendError("Mauvaise requête, paramètres manquants ou invalides."));
        return 1;
    }
    if (!body.url) {
        res.status(400).json(sendError("Mauvaise requête, paramètres manquants ou invalides."));
        return 1;
    }
    if (typeof body.url !== "string") {
        res.status(400).json(sendError("Mauvaise requête, paramètres manquants ou invalides."));
        return 1;
    }
    return 0;
}

async function videoInFav(videoId, userId)
{
    Favorite.create({
        type : "video",
        userId : userId,
        urlId : videoId,
    })
}

module.exports.setPostVideoFav = async (req, res) => {
    const tokId = req.headers.authorization;
    const tokenNID = tokId && tokId.split(' ')[1];
    const resTok = await toke.verifyToken(tokenNID);

    try {
        if (resTok.code === 401) {
            res.status(401).json(sendError("Mauvais token JWT."));
            return;
        }
        const errorId = await errorForVideoId(req.body, resTok.data.userId, res);
        if (errorId === 1) {
            return;
        }
        const videoId = getVideoIdFromUrl(req.body.url);
        await videoInFav(videoId, resTok.data.userId);
        res.status(201).json(sendResponse("Video in favorite"));
    } catch (error) {
        console.error('Erreur lors du traitement de la requête :', error);
        res.status(500).json(sendError("Erreur interne du serveur."));
        return;
    }
};
