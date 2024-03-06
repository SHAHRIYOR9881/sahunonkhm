const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const UserSchema = mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true, unique: true }, // 998-90-129-98-81
    password: { type: String, required: true },
    role: {
        type: String, required: true,
        enum: [
            "admin",
            "moderator"
        ]
    }
}, { timestamps: true });

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
});

const Users = mongoose.model("user", UserSchema);
module.exports = Users;