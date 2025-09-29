const Applicant = require('../models/Applicant');
const JobDescription = require('../models/JobDescription');

exports.createApplicant = async (req, res) => {
  const applicant = await Applicant.create(req.body);
  res.status(201).json(applicant);
};

exports.getAllApplicants = async (req, res) => {
  const applicants = await Applicant.find().populate('appliedFor');
  res.json(applicants);
};

exports.getApplicantById = async (req, res) => {
  const applicant = await Applicant.findById(req.params.id).populate('appliedFor');
  if (!applicant) {
    res.status(404);
    throw new Error('Applicant not found');
  }
  res.json(applicant);
};

exports.updateApplicant = async (req, res) => {
  const applicant = await Applicant.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!applicant) {
    res.status(404);
    throw new Error('Applicant not found');
  }
  res.json(applicant);
};

exports.deleteApplicant = async (req, res) => {
  const applicant = await Applicant.findByIdAndDelete(req.params.id);
  if (!applicant) {
    res.status(404);
    throw new Error('Applicant not found');
  }
  res.json({ message: 'Applicant deleted successfully' });
};

exports.shortlistApplicants = async (req, res) => {
  const jobId = req.params.jobId;
  const jd = await JobDescription.findById(jobId);
  if (!jd) {
    res.status(404);
    throw new Error('Job Description not found');
  }

  const applicants = await Applicant.find({ appliedFor: jobId });
  for (let applicant of applicants) {
    const hasSkills = jd.skillsRequired.every(skill => applicant.skills.includes(skill));
    const hasExperience = applicant.experience >= jd.minExperience;
    applicant.status = hasSkills && hasExperience ? 'Shortlisted' : 'Rejected';
    await applicant.save();
  }

  res.json({ message: 'Applicants processed successfully' });
};

exports.getApplicantsByStatus = async (req, res) => {
  const { status } = req.params;
  const { jobId } = req.query;

  const filter = { status };
  if (jobId) filter.appliedFor = jobId;

  const applicants = await Applicant.find(filter).populate('appliedFor');
  res.json(applicants);
};
