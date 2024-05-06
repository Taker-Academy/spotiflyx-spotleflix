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

function sendResponse(user)
{
    const response = {
        ok: false,
        data: {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
        }
    };
    return response;
}

async function recupUser(id)
{
    const user = await User.findOne({where: {id: id}});

    if (user) {
        return user;
    }
    console.log("User non trouvé.");
    return [];
}

module.exports.setGetUser = async (req, res) => {
    const tokId = req.headers.authorization;
    const tokenNID = tokId && tokId.split(' ')[1];
    const resTok = await toke.verifyToken(tokenNID);

    try {
        if (resTok.code === 401) {
            res.status(401).json(sendError("Mauvais token JWT."));
            return;
        }
        const user = await recupUser(resTok.data.userId);
        if (!user.length) {
            res.status(400).json(sendError("No user"));
            return;
        }
        res.status(200).json(sendResponse(user));
        return;
    } catch (error) {
        console.error('Erreur lors du traitement de la requête :', error);
        res.status(500).json(sendError("Erreur interne du serveur."));
        return;
    }
};
