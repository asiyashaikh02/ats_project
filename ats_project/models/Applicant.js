const mongoose = require("mongoose");
const applicantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    skills: [{ type: String, required: true }],
    experience: { type: Number, required: true },
    appliedFor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "JobDescription",
        required: true
    },
    status: {
        type: String,
        enum: ["Applied", "Shortlisted", "Rejected"],
        default: "Applied"
    }
}, { timestamps: true });
module.exports = mongoose.model("Applicant", applicantSchema);