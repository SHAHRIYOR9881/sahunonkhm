const JWT = require("jsonwebtoken");
const User = require("../model/userModel");
const asyncHandler = require("./async");
const { secretKey } = require("../config/config")
const { ErrorMessage } = require("../config/callback")

const TOKEN = asyncHandler(async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
        return next(res.json(ErrorMessage("Bu API ni ishlatish uchun avtorizatsiyadan o'ting")));
    }
    try {
        const decoded = JWT.verify(token, secretKey);
        req.user = await User.findById(decoded.id);
        next();
    }
    catch (err) {
        return next(res.json(ErrorMessage("Bu API ni ishlatish uchun avtorizatsiyadan o'ting")));
    }
})
const ROLE = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(res.json(ErrorMessage(`${req.user.role} - ushbu API ni ishlatish uchun huquqga ega emas`)));
        }
        next();
    };
}

module.exports = { TOKEN, ROLE }
