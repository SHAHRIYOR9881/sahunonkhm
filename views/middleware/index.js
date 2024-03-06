const isAuth = async (req, res, next) => {
    if (req.session.auth) {
        next()
    } else {
        return res.redirect("/404")
    }
}
const roles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.session.role)) {
            return res.redirect("/404")
        }
        next();
    };
}
module.exports = { isAuth, roles }