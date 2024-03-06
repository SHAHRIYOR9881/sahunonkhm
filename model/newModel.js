const mongoose = require("mongoose");
const NewsSchema = mongoose.Schema({
    title: {
        uz: { type: String, required: true },
        ru: { type: String, required: true },
    },
    description: {
        uz: { type: String, required: true },
        ru: { type: String, required: true },
    },
    author: {
        uz: { type: String, required: true },
        ru: { type: String, required: true },
    },
    image: [{ type: String, required: true }],
}, { timestamps: true })
const News = mongoose.model("new", NewsSchema)
module.exports = News