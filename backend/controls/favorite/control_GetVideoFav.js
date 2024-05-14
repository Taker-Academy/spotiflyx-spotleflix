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

function sendResponse(video)
{
    const response = {
        ok: true,
        data: video,
    };
    return response;
}

async function getInFav(userId)
{
    try {
        const userVideoFavorites = await Favorite.findOne({
            where: {
                userId: userId,
                type : "video",
            },
        });
        return userVideoFavorites;
    } catch (error) {
        console.error('Erreur lors de la récupération des favoris vidéo de l\'utilisateur :', error);
        throw error;
    }
}

module.exports.setGetVideoFav = async (req, res) => {
    const tokId = req.headers.authorization;
    const tokenNID = tokId && tokId.split(' ')[1];
    const resTok = await toke.verifyToken(tokenNID);

    try {
        if (resTok.code === 401) {
            res.status(401).json(sendError("Mauvais token JWT."));
            return;
        }
        const video = await getInFav(resTok.data.userId);
        console.log("AHHAHAHA");
        console.log(video);
        res.status(200).json(sendResponse(video));
    } catch (error) {
        console.error('Erreur lors du traitement de la requête :', error);
        res.status(500).json(sendError("Erreur interne du serveur."));
        return;
    }
};
