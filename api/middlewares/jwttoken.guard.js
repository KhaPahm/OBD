const { verify } = require('jsonwebtoken');

const verifyToken = async(token, secretKey) => {
    try {
        return await verify(token, secretKey);
    } catch(err) {
        console.log(`Error in verify access token: ${err}`);
        return null;
    }
}

module.exports = jwtTokenValidator = async (req, res, next) => {
    const accessTokenFromHeader = req.headers.authorization;
    if(!accessTokenFromHeader) {
        return res.status(401).json({
            msg: "Unauthorized"
        });
    }

    const signingKey = process.env.JWT_SIGN_KEY;
    const verified = await verifyToken(
        accessTokenFromHeader, signingKey
    );

    if(!verified) {
        return res.status(401).json({
            msg: "Unauthorized"
        });
    }

    req.userName = verified.name;
    return next();
}