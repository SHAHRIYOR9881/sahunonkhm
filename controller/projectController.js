const ProjectModel = require("../model/projectModel");
const MyClass = require("../config/class")
const asyncHandler = require('../middleware/async');
const CallbackMessage = require("../config/callback");

exports.createData = asyncHandler(async (req, res, next) => {
    try {
        const {
            nameuz,
            nameru,
        } = req.body;
        const files = req.files;
        const arrayFiles = []
        for (let item of files) {
            const { filename } = item
            arrayFiles.push(filename)
        }
        const data = new ProjectModel({
            name: { uz: nameuz, ru: nameru },
            image: arrayFiles,
        })
        await data.save()
        res.json(CallbackMessage.CreateMessage(data))
    }
    catch (error) {
        res.json(CallbackMessage.ErrorMessage(error.message))
    }
});
exports.getSingle = asyncHandler(async (req, res, next) => {
    const result = new MyClass(ProjectModel, req, res, next)
    result.GetSingleData()
});
exports.getAll = asyncHandler(async (req, res, next) => {
    const result = new MyClass(ProjectModel, req, res, next)
    result.GetAllDatas()
});
exports.updateSingleContaxt = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    if (!id) res.json(CallbackMessage.ErrorMessage("Params ID is not defined"))
    else {
        const result = new MyClass(ProjectModel, req, res, next)
        result.UpdateSingleWithoutFile()
    }
})
exports.updateSingleFile = asyncHandler(async (req, res, next) => {
    const { id } = req.params
    if (!id) res.json(CallbackMessage.ErrorMessage("Params ID is not defined"))
    else {
        const result = new MyClass(ProjectModel, req, res, next)
        result.UpdateSingleWithFile("image", "uploads")
    }
})
exports.deleteSingle = asyncHandler(async (req, res, next) => {
    const { id } = req.params
    if (!id) res.json(CallbackMessage.ErrorMessage("Params ID is not defined"))
    else {
        const result = new MyClass(ProjectModel, req, res, next)
        result.DeleteSingleWithFile("image", "uploads")
    }
})