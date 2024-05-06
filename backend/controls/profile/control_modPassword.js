const User = require("../../models/models_User");
const toke = require("../../functionUtils/handlingToken");
const bcrypt = require('bcrypt');

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
        modify: true,
    };
    return response;
}

async function comparePassword(hashedPassword, plainPassword) {
    try {
        const match = await bcrypt.compare(plainPassword, hashedPassword);
        return match;
    } catch (error) {
        console.error('Error comparing passwords:', error);
        return false;
    }
}

async function hashPassword(password)
{
    return bcrypt
        .hash(password, 15)
        .then(hash => {
            return hash;
        })
        .catch(error => {
            return "";
        })
}

function errorParams(params, res)
{
    if (!params) {
        res.status(400).json(sendError("Mauvaise requête, paramètres manquants ou invalides."));
        return 1;
    }
    if (!params.password || !params.new_password) {
        res.status(400).json(sendError("Mauvaise requête, paramètres manquants ou invalides."));
        return 1;
    }
    if (typeof params.password !== "string" || typeof params.new_password !== "string") {
        res.status(400).json(sendError("Mauvaise requête, paramètres manquants ou invalides."));
        return 1;
    }
    if (params.password === params.new_password) {
        res.status(403).json(sendError("Nouveau mot de passe identique à l'actuel."));
        return 1;
    }
    return 0;
}

async function errorRequest(params, res, id)
{
    if (errorParams(params, res) === 1) {
        return 1;
    }
    const user = await User.findOne({where: {id: id}});
    const resultMdp = await comparePassword(user.password, params.password);
    if (resultMdp === false) {
        res.status(402).json(sendError("Mot de passe actuel incorrect."));
        return 1;
    }
    return 0;
}

async function changePassword(body, id)
{
    const hashPass = await hashPassword(body.new_password);

    const newPass = {
        password: hashPass,
      };
      User.findByPk(id)
        .then(user => {
          if (!user) {
            throw new Error('Utilisateur non trouvé');
          }
          return user.update(newPass);
        })
        .then(updatedUser => {
          console.log('Utilisateur mis à jour avec succès :', updatedUser);
        })
        .catch(error => {
          console.error('Erreur lors de la mise à jour de l\'utilisateur :', error);
        });
}

module.exports.putModPassword = async (req, res) => {
    const tokId = req.headers.authorization;
    const tokenNID = tokId && tokId.split(' ')[1];
    const resTok = await toke.verifyToken(tokenNID);
    const body = req.body;

    try {
        if (resTok.code === 401) {
            res.status(401).json(sendError("Mauvais token JWT."));
            return;
        }
        const errReq = await errorRequest(body, res, resTok.data.userId);
        if (errReq === 1) {
            return;
        }
        await changePassword(body, resTok.data.userId);
        res.status(200).json(sendResponse());
        return;
    } catch (error) {
        console.error('Erreur lors du traitement de la requête :', error);
        res.status(500).json(sendError("Erreur interne du serveur."));
        return;
    }
};
