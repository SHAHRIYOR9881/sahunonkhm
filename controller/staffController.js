const StaffModel = require("../model/staffModel");
const MyClass = require("../config/class")
const asyncHandler = require('../middleware/async');
const CallbackMessage = require("../config/callback");

exports.createData = asyncHandler(async (req, res, next) => {
    try {
        const {
            nameuz,
            nameru,
            descriptionuz,
            descriptionru,
            reception_days_uz,
            reception_days_ru,
            position_uz,
            position_ru,
            reception_hours,
            phone,
            email,
            status
        } = req.body;
        const files = req.files;
        const arrayFiles = []
        for (let item of files) {
            const { filename } = item
            arrayFiles.push(filename)
        }
        const data = new StaffModel({
            image: arrayFiles,
            name: { uz: nameuz, ru: nameru },
            description: { uz: descriptionuz, ru: descriptionru },
            reception_days: { uz: reception_days_uz, ru: reception_days_ru },
            position: { uz: position_uz, ru: position_ru },
            phone: phone,
            email: email,
            status: status,
            reception_hours: reception_hours,
        })
        await data.save()
        res.json(CallbackMessage.CreateMessage(data))
    }
    catch (error) {
        res.json(CallbackMessage.ErrorMessage(error.message))
    }
})
exports.getSingle = asyncHandler(async (req, res, next) => {
    const result = new MyClass(StaffModel, req, res, next)
    result.GetSingleData()
})
exports.getAll = asyncHandler(async (req, res, next) => {
    const result = new MyClass(StaffModel, req, res, next)
    result.GetAllDatas()
})
exports.updateSingleContaxt = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    if (!id) res.json(CallbackMessage.ErrorMessage("Params ID is not defined"))
    else {
        const result = new MyClass(StaffModel, req, res, next)
        result.UpdateSingleWithoutFile()
    }
})
exports.updateSingleFile = asyncHandler(async (req, res, next) => {
    const { id } = req.params
    if (!id) res.json(CallbackMessage.ErrorMessage("Params ID is not defined"))
    else {
        const result = new MyClass(StaffModel, req, res, next)
        result.UpdateSingleWithFile("image", "uploads")
    }
})
exports.deleteSingle = asyncHandler(async (req, res, next) => {
    const { id } = req.params
    if (!id) res.json(CallbackMessage.ErrorMessage("Params ID is not defined"))
    else {
        const result = new MyClass(StaffModel, req, res, next)
        result.DeleteSingleWithFile("image", "uploads")
    }
})

exports.filterData = asyncHandler(async (req, res, next) => {
    const { status } = req.query;
    if (!status) res.json(CallbackMessage.ErrorMessage("'Status' in query is not defined"))
    else {
        const result = await StaffModel.find({ status: status }).sort({ createdAt: -1 }).lean();
        res.json(CallbackMessage.GetMessage(result))
    }
})