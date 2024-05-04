const Video = require("../../models/models_Video");
const toke = require("../../functionUtils/handlingToken");

function sendError(message)
{
    const response = {
        ok: false,
        error: message,
    };
    return response;
}

function sendResponse(post)
{
    const response = {
        ok: true,
        data: post,
    };
    return response;
}

async function getVideos(data) {
    try {
        const videos = await Video.findOne({where: { userId: data.userId }});
        return videos;
    } catch (error) {
        console.error('Erreur lors de la récupération des videos :', error);
        throw error;
    }
}

module.exports.setGetVideosUser = async (req, res) => {
    const tokId = req.headers.authorization;
    const tokenNID = tokId && tokId.split(' ')[1];
    const resTok = await toke.verifyToken(tokenNID);

    try {
        if (resTok.code === 401) {
            res.status(401).json(sendError("Mauvais token JWT."));
            return;
        }
        const allVideo = await getVideos(resTok.data);
        res.status(200).json(sendResponse(allVideo));
        return;
    } catch (error) {
        console.error('Erreur lors du traitement de la requête :', error);
        res.status(500).json(sendError("Erreur interne du serveur."));
        return;
    }
};