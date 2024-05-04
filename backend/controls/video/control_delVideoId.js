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

function sendResponse(title)
{
    const response = {
        ok: true,
        data: {
            title: title,
        },
    };
    return response;
}

function errorParams(params, res)
{
    if (!params) {
        res.status(400).json(sendError("Mauvaise requête, paramètres manquants ou invalides."));
        return 1;
    }
    if (!params.id) {
        res.status(400).json(sendError("Mauvaise requête, paramètres manquants ou invalides."));
        return 1;
    }
    if (typeof params.id !== "string") {
        res.status(400).json(sendError("Mauvaise requête, paramètres manquants ou invalides."));
        return 1;
    }
    return 0;
}

async function errorRequest(params, res, id)
{
    if (errorParams(params, res) === 1) {
        return 1;
    }
    const video = await Video.findOne({where: {id: params.id}});
    if (!video) {
        res.status(404).json(sendError("Élément non trouvé."));
        return 1;
    }
    if (video.userId !== id) {
        res.status(403).json(sendError("L'utilisateur n'est pas le propriétaire de l'élément."));
        return 1;
    }
    return 0;
}

async function deleteVideo(videoId)
{
    try {
        const video = await Video.findOne({where: {id: params.id}});
        const title = video.title;

        const delVid = await Video.destroy({
          where: {
            id: videoId
          }
        });
        if (delVid === 1) {
            return title;
        }
        console.error("Vidéo non supprimé, une erreur est apparue");
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la suppression de la vidéo :', error);
      }
}

module.exports.setDelVideoId = async (req, res) => {
    const tokId = req.headers.authorization;
    const tokenNID = tokId && tokId.split(' ')[1];
    const resTok = await toke.verifyToken(tokenNID);
    const params = req.params;

    try {
        if (resTok.code === 401) {
            res.status(401).json(sendError("Mauvais token JWT."));
            return;
        }
        const errReq = await errorRequest(params, res, resTok.data.userId);
        if (errReq === 1) {
            return;
        }
        const title = await deleteVideo(params.id);
        await res.status(200).json(sendResponse(title));
        return;
    } catch (error) {
        console.error('Erreur lors du traitement de la requête :', error);
        res.status(500).json(sendError("Erreur interne du serveur."));
        return;
    }
};