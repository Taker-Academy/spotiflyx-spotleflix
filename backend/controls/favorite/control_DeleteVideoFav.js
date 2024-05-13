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

async function favoriteIsHere(videoId, userId)
{
    User.findByPk(userId, {
        include: {
            model: Favorite,
            as: 'favorites',
            where:
            {
                type: "video",
                urlId: videoId
            }
        }
    })
    .then(user => {
        if (user) {
            return 0;
        } else {
            return 1;
        }
    });
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
    const videoId = getVideoIdFromUrl(body.url);
    const inFavorite = await favoriteIsHere(videoId, userId);
    if (inFavorite === 1) {
        res.status(409).json(sendError("Vous avez déjà supprimé ce post des favoris."));
        return 1;
    }
    return 0;
}

async function deleteInFav(videoId, userId)
{
    try {r
        const videoFavorites = await Favorite.destroy({
            where: {
                userId: userId,
                urlId: videoId,
                type: 'video'
            }
        });
    } catch (error) {
        console.error('Erreur lors de la suppression des favoris vidéo de l\'utilisateur :', error);
        throw error;
    }

}

module.exports.setDeleteVideoFav = async (req, res) => {
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
        const videoId = getVideoIdFromUrl(body.url);
        await deleteInFav(videoId, resTok.data.userId);
        res.status(201).json(sendResponse("Video delete from favorite"));
    } catch (error) {
        console.error('Erreur lors du traitement de la requête :', error);
        res.status(500).json(sendError("Erreur interne du serveur."));
        return;
    }
};