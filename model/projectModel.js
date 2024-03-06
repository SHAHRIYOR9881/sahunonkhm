const mongoose = require("mongoose");
const ProjectSchema = mongoose.Schema({
    name: {
        uz: { type: String, required: true },
        ru: { type: String, required: true },
    },
    image: [{ type: String, required: true }],
}, { timestamps: true });
const Projects = mongoose.model("project", ProjectSchema);
module.exports = Projects;