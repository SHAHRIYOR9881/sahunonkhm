// Hududiy bo'linma
const mongoose = require("mongoose");
const RegionalBorderSchema = mongoose.Schema({
    name: {
        uz: { type: String, required: true },
        ru: { type: String, required: true },
    },
    director: {
        uz: { type: String, required: true },
        ru: { type: String, required: true },
    },
    address: {
        uz: { type: String, required: true },
        ru: { type: String, required: true },
    },
    telephone: { type: String, required: true }, 
    image: [{ type: String, required: true }],
}, { timestamps: true });
const RegionalBorder = mongoose.model("regional_border", RegionalBorderSchema);
module.exports = RegionalBorder;