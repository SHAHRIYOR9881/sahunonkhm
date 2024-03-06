const mongoose = require("mongoose");
const MediaSchema = mongoose.Schema({
    url: { type: String, required: true },
}, { timestamps: true });
const Media = mongoose.model("video", MediaSchema);
module.exports = Media;