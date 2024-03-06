const mongoose = require("mongoose");
const OrgazinationalStructuraSchema = mongoose.Schema({
    image: [{ type: String, required: true }],
}, { timestamps: true });
const OrgazinationalStructura = mongoose.model("orgazinational_structure", OrgazinationalStructuraSchema);
module.exports = OrgazinationalStructura;