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
                urlId: videoId,
                userId: userId
            }
        }
    })
    .then(user => {
        if (user) {
            return 1;
        } else {
            return 0;
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
        res.status(409).json(sendError("Vous avez déjà mis ce post en favoris."));
        return 1;
    }
    return 0;
}

async function videoInFav(videoId, userId)
{
    User.findByPk(userId)
  .then(user => {
    if (!user) {
      throw new Error('Utilisateur non trouvé');
    }
    return Favorite.create({
      type: "video",
      urlId: videoId
    })
    .then(favorite => {
      return user.addFavorite(favorite);
    });
  })
  .then(() => {
    console.log('Favori ajouté avec succès à l\'utilisateur.');
  })
  .catch(error => {
    console.error('Erreur lors de l\'ajout du favori à l\'utilisateur :', error);
  });

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
        const videoId = getVideoIdFromUrl(body.url);
        await videoInFav(videoId, resTok.data.userId);
        res.status(201).json(sendResponse("Video in favorite"));
    } catch (error) {
        console.error('Erreur lors du traitement de la requête :', error);
        res.status(500).json(sendError("Erreur interne du serveur."));
        return;
    }
};
