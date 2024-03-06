const ContactModel = require("../model/contactModel");
const MyClass = require("../config/class")
const asyncHandler = require('../middleware/async');
const CallbackMessage = require("../config/callback");

exports.createData = asyncHandler(async (req, res, next) => {
    try {
        const {
            nameuz,
            nameru,
            positionuz,
            positionru,
            receptionuz,
            receptionru,
            phone
        } = req.body;
        const data = new ContactModel({
            name: { uz: nameuz, ru: nameru },
            position: { uz: positionuz, ru: positionru },
            reception: { uz: receptionuz, ru: receptionru },
            phone: phone
        })
        await data.save()
        res.json(CallbackMessage.CreateMessage(data))
    }
    catch (error) {
        res.json(CallbackMessage.ErrorMessage(error.message))
    }
});
exports.getSingle = asyncHandler(async (req, res, next) => {
    const result = new MyClass(ContactModel, req, res, next)
    result.GetSingleData()
});
exports.getAll = asyncHandler(async (req, res, next) => {
    const result = new MyClass(ContactModel, req, res, next)
    result.GetAllDatas()
});
exports.updateSingleContaxt = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    if (!id) res.json(CallbackMessage.ErrorMessage("Params ID is not defined"))
    else {
        const result = new MyClass(ContactModel, req, res, next)
        result.UpdateSingleWithoutFile()
    }
})
exports.deleteSingle = asyncHandler(async (req, res, next) => {
    const { id } = req.params
    if (!id) res.json(CallbackMessage.ErrorMessage("Params ID is not defined"))
    else {
        const result = new MyClass(ContactModel, req, res, next)
        result.DeleteSingleWithoutFile()
    }
})