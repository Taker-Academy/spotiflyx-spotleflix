const { addNewUser } = require('../../functionUtils/handlingRegister');
const { createToken } = require('../../functionUtils/handlingToken');
const User = require('../../models/models_User');
const nodemailer = require('nodemailer');

function sendError(message)
{
    const response = {
        ok: false,
        error: message,
    };
    return response;
}

async function sendMail(email)
{
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.MAIL,
          pass: process.env.MDP_MAIL
        }
    });
    const mailOptions = {
        from: process.env.MAIL,
        to: email,
        subject: 'Bienvenue sur notre site',
        text: 'Bonjour et bienvenue sur notre site. Merci de vous être inscrit !'
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
        } else {
            console.log('E-mail envoyé avec succès :', info.response);
        }
    });
}

function errorForRegister(body, res)
{
    if (!(body)) {
        res.status(400).json(sendError("Mauvaise requête, paramètres manquants ou invalides."));
        return 1;
    }
    if (typeof body !== "object" || Object.keys(body).length !== 4 ||
    !body.email || !body.password || !body.firstName || !body.lastName ||
    typeof body.email !== "string" || typeof body.password !== "string" ||
    typeof body.lastName !== "string" || typeof body.firstName !== "string") {
        res.status(400).json(sendError("Mauvaise requête, paramètres manquants ou invalides."));
        return 1;
    }
    return 0;
}

async function sendResponse(body)
{
    const user = await User.findOne({ email: body.email });
    const createTok = await createToken(user);

    const response = {
        ok: true,
        data: {
            token: createTok,
            user: {
                email: body.email,
                firstName: body.firstName,
                lastName: body.lastName,
            }
        }
    };
    return response;
}

module.exports.setRegister = async (req, res) => {
    const body = req.body;
    try {
        const error = errorForRegister(body, res);
        if (error === 1) {
            return;
        }
        const newUseRes = await addNewUser(body);
        if (newUseRes === 1) {
            res.status(400).json(sendError("Mauvais identifiants."));
            return;
        }
        if (newUseRes === 2) {
            res.status(401).json(sendError("Mauvais identifiants."));
            return;
        }
        const user = await sendResponse(body);
        await sendMail(body.email);
        res.status(201).json(user);
    } catch (error) {
        console.error('Erreur lors du traitement de la requête :', error);
        res.status(500).json(sendError("Erreur interne du serveur."));
        return;
    }
};
