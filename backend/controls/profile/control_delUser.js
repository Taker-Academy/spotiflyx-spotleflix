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

function sendResponse()
{
    const response = {
        ok: true,
        remove: true,
    };
    return response;
}

async function deleteUser(id)
{
    const delUser = await User.destroy({
        where: {
          id: id
        }
    });
    if (delUser === 1) {
        return 0;
    }
    res.status(500).json(sendError("User pas supprimé, erreur."));
    return 1;
}

module.exports.delUser = async (req, res) => {
    const tokId = req.headers.authorization;
    const tokenNID = tokId && tokId.split(' ')[1];
    const resTok = await toke.verifyToken(tokenNID);

    try {
        if (resTok.code === 401) {
            res.status(401).json(sendError("Mauvais token JWT."));
            return;
        }
        const result = await deleteUser(resTok.data.userId);
        if (result === 1)
            return;
        res.status(200).json(sendResponse());
        return;
    } catch (error) {
        console.error('Erreur lors du traitement de la requête :', error);
        res.status(500).json(sendError("Erreur interne du serveur."));
        return;
    }
};
