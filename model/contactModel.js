const mongoose = require("mongoose");
const ContactSchema = mongoose.Schema({
    name: {
        uz: { type: String, required: true },
        ru: { type: String, required: true },
    },
    position: {
        uz: { type: String, required: true },
        ru: { type: String, required: true },
    },
    reception: {
        uz: { type: String, required: true },
        ru: { type: String, required: true },
    },
    phone: {
        type: String, required: true
    }
}, { timestamps: true });
const Contact = mongoose.model("contact", ContactSchema);
module.exports = Contact;