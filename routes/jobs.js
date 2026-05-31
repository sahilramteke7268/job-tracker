const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  company: { type: String, required: true },
  role: { type: String, required: true },
  status: {
    type: String,
    enum: ['Applied', 'Interview', 'Rejected', 'Offered'],
    default: 'Applied'
  },
  appliedDate: { type: Date, default: Date.now },
  notes: { type: String, default: '' }
});

const Job = mongoose.model('Job', jobSchema);

router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find().sort({ appliedDate: -1 });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const job = new Job(req.body);
    const savedJob = await job.save();
    res.status(201).json(savedJob);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const updated = await Job.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);
    res.json({ message: 'Job deleted ✅' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;