const mongoose = require("mongoose");
const jobDescriptionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    skillsRequired: [{ type: String, required: true }],
    minExperience: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model("JobDescription", jobDescriptionSchema);