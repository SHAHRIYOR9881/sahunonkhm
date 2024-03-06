const CallbackMessage = require('./callback')
const path = require("path");
const fs = require("fs")

module.exports = class MyClass {
    constructor(ModelSchema, Request, Response, Next) {
        this.modelSchema = ModelSchema
        this.req = Request
        this.res = Response
        this.next = Next
    }


    async CreateData() {
        const res = this.res;
        const req = this.req;
        const Model = this.modelSchema;
        const next = this.next;

        const body = { ...req.body };
        const result = Model(body)
        result
            .save()
            .then(() => res.json(CallbackMessage.CreateMessage(result)))
            .catch((error) => res.json(CallbackMessage.ErrorMessage(error.message)))
    }
    async GetSingleData(...populate) {
        const res = this.res;
        const req = this.req;
        const Model = this.modelSchema;
        const next = this.next;
        const { id } = req.params;
        await Model.findById({ _id: id }).populate([...populate]).exec((error, data) => {
            if (error) res.json(CallbackMessage.ErrorMessage(error.message))
            else res.json(CallbackMessage.GetMessage(data))
        })
    }
    async GetAllDatas(...populate) {
        const res = this.res;
        const req = this.req;
        const Model = this.modelSchema;
        const next = this.next;
        const data = await Model.find().populate([...populate]).sort({ createdAt: -1 }).lean()
        res.json(CallbackMessage.GetMessage(data))

        // const { pages } = req.query
        // const count = 5
        // const skip = parseInt((pages - 1) * count)
        // const total = await Model.find().count()
        // if (!skip || skip == "" || skip == undefined || skip == 1) {
        //     await Model
        //         .find()
        //         .populate([...populate])
        //         .sort({ createdAt: -1 })
        //         .limit(count)
        //         .lean()
        //         .exec((error, data) => {
        //             if (error) res.json(CallbackMessage.ErrorMessage(error.message))
        //             else {
        //                 res.json({
        //                     status: true,
        //                     total: total,
        //                     data: data,
        //                 })
        //             }
        //         })
        // }
        // else {
        //     await Model
        //         .find()
        //         .sort({ createdAt: -1 })
        //         .populate([...populate])
        //         .limit(count)
        //         .skip(skip)
        //         .exec((error, data) => {
        //             if (error) res.json(CallbackMessage.ErrorMessage(error.message))
        //             else {
        //                 res.json({
        //                     status: true,
        //                     total: total,
        //                     data: data,
        //                 })
        //             }
        //         })
        // }
        
    }
    async UpdateSingleWithoutFile() {
        const res = this.res;
        const req = this.req;
        const Model = this.modelSchema;
        const next = this.next;
        const { id } = req.params;
        await Model
            .findByIdAndUpdate({ _id: id })
            .exec(async (error, data) => {
                if (error) res.json(CallbackMessage.ErrorMessage(error.message))
                else {
                    Object.assign(data, req.body)
                    await data.save()
                        .then(() => res.json(CallbackMessage.UpdateMessage(data)))
                        .catch((error) => res.json(CallbackMessage.ErrorMessage(error.message)))
                }
            })
    }
    async UpdateSingleWithFile(key, folder) {
        const res = this.res;
        const req = this.req;
        const Model = this.modelSchema;
        const next = this.next;
        const { id } = req.params;
        await Model.findById({ _id: id })
            .exec(async (error, data) => {
                if (error) res.json(CallbackMessage.ErrorMessage(error.message))
                else {
                    const files = data[key]
                    for (let item of files) {
                        const filePath = path.join(__dirname, `../public/${folder}/` + item)
                        fs.unlink(filePath, function () { [] })
                    }
                }
            })
        await Model.findByIdAndUpdate({ _id: id })
            .exec(async (error, data) => {
                if (error) res.json(CallbackMessage.ErrorMessage(error.message))
                else {
                    const files = req.files
                    const arrayFiles = []
                    for (let item of files) {
                        const { filename } = item
                        arrayFiles.push(filename)
                    }
                    data[key] = arrayFiles
                    await data.save()
                        .then(() => res.json(CallbackMessage.UpdateMessage(data)))
                        .catch((error) => res.json(CallbackMessage.ErrorMessage(error)))
                }
            })
    }
    async DeleteSingleWithoutFile() {
        const res = this.res;
        const req = this.req;
        const Model = this.modelSchema;
        const next = this.next;
        const { id } = req.params;
        await Model
            .findByIdAndDelete({ _id: id })
            .exec(async (error, data) => {
                if (error) res.json(CallbackMessage.ErrorMessage(error.message))
                else res.json(CallbackMessage.CreateMessage([]))
            })
    }
    async DeleteSingleWithFile(key, folder) {
        const res = this.res;
        const req = this.req;
        const Model = this.modelSchema;
        const next = this.next;
        const { id } = req.params;
        await Model.findById({ _id: id })
            .exec(async (error, data) => {
                if (error) res.json(CallbackMessage.ErrorMessage(error.message))
                else {
                    const files = data[key]
                    for (let item of files) {
                        const filePath = path.join(__dirname, `../public/${folder}/` + item)
                        fs.unlink(filePath, function (error) { })
                    }
                    await Model.findByIdAndDelete({ _id: id })
                    res.json(CallbackMessage.DeleteMessage([]))
                }
            })
    }
}