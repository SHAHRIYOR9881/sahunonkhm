const UserModel = require("../model/userModel");
const MyClass = require("../config/class")
const asyncHandler = require('../middleware/async');
const CallbackMessage = require("../config/callback");
const { secretKey, secretTime } = require("../config/config")
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");

exports.register = asyncHandler(async (req, res, next) => {
    const { name, phone, password, role, } = req.body;
    if (!name || !phone || !password || !role) {
        res.json(CallbackMessage.ErrorMessage("Fill up the form"));
    }
    else {
        try {
            const foundUser = await UserModel.find({ phone: phone }).select("name")
            if (foundUser.length >= 1) {
                res.json(CallbackMessage.ErrorMessage("This user has signed up before"));
            }
            else {
                const user = new UserModel({
                    name: name,
                    phone: phone,
                    password: password,
                    role: role
                })
                await user.save()
                res.json(CallbackMessage.CreateMessage(user))
            }
        }
        catch (error) {
            res.json(CallbackMessage.ErrorMessage(error.message));
        }
    }
});
exports.login = asyncHandler(async (req, res, next) => {
    const { phone, password } = req.body;
    if (!phone || !password || phone == "" || password == "") {
        res.json(CallbackMessage.ErrorMessage("Fill up the form"));
    } else {
        const foundUser = await UserModel.find({ phone: phone }).lean()
        const user = foundUser[0]
        if (!user || user == null || user == "" || user == undefined || user == false) {
            res.json(CallbackMessage.ErrorMessage("Phone invalid"));
        }
        else {
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch || isMatch == false) {
                res.json(CallbackMessage.ErrorMessage("Password invalid"));
            } else {


                req.session.auth = true
                req.session.role = user.role
                req.session.save()


                const jsonwebtoken = JWT.sign(
                    { id: user._id, role: user.role, }, secretKey, { expiresIn: secretTime }
                );
                res.json({
                    status: true,
                    role: user.role,
                    token: jsonwebtoken,
                })
            }
        }
    }
});
exports.decodeToken = asyncHandler(async (req, res, next) => {
    const { authorization } = req.headers
    const base64Url = authorization.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    const decodeToken = JSON.parse(jsonPayload);
    res.json({
        status: true,
        decodeToken: decodeToken,
    })
});
exports.destroySession = asyncHandler(async (req, res, next) => {
    req.session.destroy()
    res.clearCookie("connect.sid")
    res.json({
        message: "Session deleted"
    })
})
exports.getSingle = asyncHandler(async (req, res, next) => {
    const result = new MyClass(UserModel, req, res, next)
    result.GetSingleData()
})
exports.getAll = asyncHandler(async (req, res, next) => {
    const data = await UserModel.find({ role: "moderator" }).sort({ createdAt: -1 }).lean()
    res.json(CallbackMessage.GetMessage(data))
})
exports.updateSingle = asyncHandler(async (req, res, next) => {
    const { id } = req.params
    const { name, phone, password } = req.body
    if (!id || !name || !phone || !password) {
        res.json(CallbackMessage.ErrorMessage("Ma'lumotni to'liq kiriitng"))
    }
    else {
        try {
            const user_update = await UserModel.findByIdAndUpdate(id)
            user_update.name = name
            user_update.phone = phone
            user_update.password = password
            await user_update.save()
            res.json(CallbackMessage.UpdateMessage(user_update))
        }
        catch (error) {
            res.json(CallbackMessage.ErrorMessage(error.message));
        }
    }
})
exports.deleteSingle = asyncHandler(async (req, res, next) => {
    const { id } = req.params
    if (!id) res.json(CallbackMessage.ErrorMessage("Params ID is not defined"))
    else {
        const result = new MyClass(UserModel, req, res, next)
        result.DeleteSingleWithoutFile()
    }
})