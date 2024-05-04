const Video = require("../../models/models_Video");
const toke = require("../../functionUtils/handlingToken");

async function sendResponse(post)
{
    const response = {
        ok: true,
        data: {
            id: post.id,
            createdAt: post.createdAt,
            userId: post.userId,
            title: post.title,
            description: post.description,
            videoUrl: post.videoUrl,
            thumbnailUrl: post.thumbnailUrl,
        }
    };
    return response;
}

function sendError(message)
{
    const response = {
        ok: false,
        error: message,
    };
    return response;
}

async function addNewVideo(body, data, res) {
    try {
        const newVideo = new Video({
            createdAt: new Date(),
            title: body.title,
            description: body.description,
            videoUrl: body.videoUrl,
            thumbnailUrl: body.thumbnailUrl,
            userId: data.userId
        });

        const savedVideo = await newVideo.save();

        console.log('Utilisateur ajouté avec succès :', savedVideo);
        return savedVideo;
    } catch (error) {
        console.error('Erreur lors de l\'ajout de l\'utilisateur :', error);
        res.status(500).json(sendError("Erreur interne du serveur"));
        return [];    }
}

function errorForRegister(body, res)
{
    if (!(body)) {
        res.status(400).json(sendError("Mauvaise requête, paramètres manquants ou invalides."));
        return 1;
    }
    if (typeof body !== "object" || Object.keys(body).length !== 4 ||
    !body.title || !body.description || !body.videoUrl || !body.thumbnailUrl ||
    typeof body.title !== "string" || typeof body.description !== "string" ||
    typeof body.thumbnailUrl !== "string" || typeof body.videoUrl !== "string") {
        res.status(400).json(sendError("Mauvaise requête, paramètres manquants ou invalides."));
        return 1;
    }
    return 0;
}

module.exports.setPostVideo = async (req, res) => {
    const tokId = req.headers.authorization;
    const tokenNID = tokId && tokId.split(' ')[1];
    const resTok = await toke.verifyToken(tokenNID);
    const body = req.body;
    try {
        if (resTok.code === 401) {
            res.status(401).json(sendError("Mauvais token JWT."));
            return;
        }
        if (errorForRegister(body, res) === 1) {
            return;
        }
        const infoVideo = await addNewVideo(body, resTok.data);
        if (!infoVideo.length) {
            return;
        }
        res.status(201).json(sendResponse(infoVideo));
        return;
    } catch (error) {
        console.error('Erreur lors du traitement de la requête :', error);
        res.status(500).json(sendError("Erreur interne du serveur."));
        return;
    }
};