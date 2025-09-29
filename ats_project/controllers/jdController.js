const JobDescription = require('../models/JobDescription');

exports.createJD = async (req, res) => {
  const jd = await JobDescription.create(req.body);
  res.status(201).json(jd);
};

exports.getAllJDs = async (req, res) => {
  const jds = await JobDescription.find();
  res.json(jds);
};

exports.getJDById = async (req, res) => {
  const jd = await JobDescription.findById(req.params.id);
  if (!jd) {
    res.status(404);
    throw new Error('Job Description not found');
  }
  res.json(jd);
};

exports.updateJD = async (req, res) => {
  const jd = await JobDescription.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!jd) {
    res.status(404);
    throw new Error('Job Description not found');
  }
  res.json(jd);
};

exports.deleteJD = async (req, res) => {
  const jd = await JobDescription.findByIdAndDelete(req.params.id);
  if (!jd) {
    res.status(404);
    throw new Error('Job Description not found');
  }
  res.json({ message: 'Job deleted successfully' });
};
