const mongoose = require("mongoose");
const StaffSchema = mongoose.Schema({
    name: {
        uz: { type: String, required: true },
        ru: { type: String, required: true },
    },
    description: {
        uz: { type: String, required: true },
        ru: { type: String, required: true },
    },
    reception_days: {
        uz: { type: String, required: true },
        ru: { type: String, required: true },
    },
    position: {
        uz: { type: String, required: true },
        ru: { type: String, required: true },
    },
    reception_hours: { type: String, required: true, },
    image: [{ type: String, required: true }],
    phone: { type: String, required: true },
    email: { type: String, required: true },
    status: {
        type: String, required: true,
        enum: [
            "1", // rahbariyat
            "2", // hodimlar
            "3", // hududiy bo'linma rahbari
        ]
    }
}, { timestamps: true })
const Staff = mongoose.model("staff", StaffSchema)
module.exports = Staff