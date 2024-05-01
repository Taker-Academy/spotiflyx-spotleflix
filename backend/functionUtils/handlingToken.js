const jwt = require("jsonwebtoken");

async function createToken(user)
{
    console.log("USER TOKEN ===>" + user)
    const payload = {
        userId: user.id,
    };

    const secretKey = process.env.CRYPT_TOK;
    const options = { expiresIn: '2h' };

    const token = jwt.sign(payload, secretKey, options);
    return token;

}

async function verifyToken(myTok)
{
    try {
        const decoded = jwt.verify(myTok, process.env.CRYPT_TOK);
        if (decoded) {
            return {
                code: 200,
                data: decoded
            };
        }
        return { code: 401 };
    } catch (err) {
        return { code: 401 };
    }
}

module.exports= {createToken, verifyToken};
