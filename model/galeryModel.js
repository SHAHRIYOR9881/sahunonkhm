const mongoose = require("mongoose");
const MediaSchema = mongoose.Schema({
    image: [{ type: String, required: true }],
    name: {
        uz: { type: String, required: true },
        ru: { type: String, required: true },
    },
    description: {
        uz: { type: String, required: true },
        ru: { type: String, required: true },
    },
}, { timestamps: true });
const Media = mongoose.model("galery", MediaSchema);
module.exports = Media;