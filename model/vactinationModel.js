const mongoose = require("mongoose");
const VactinationSchema = mongoose.Schema({
    name: {
        uz: { type: String, required: true },
        ru: { type: String, required: true },
    },
    description: {
        uz: { type: String, required: true },
        ru: { type: String, required: true },
    },
}, { timestamps: true });
const Vactination = mongoose.model("vactination", VactinationSchema);
module.exports = Vactination;