const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  personalInformation: {
    firstName: String,
    lastName: String,
    male: Boolean,
    email: String,
    phone: String,
    address: String,
    linkedin: String,
    github: String,
    summary: String,
  },
  education: [
    {
      degree: String,
      institution: String,
      location: String,
      graduationYear: String,
    },
  ],
  workExperience: [
    {
      title: String,
      company: String,
      location: String,
      startDate: String,
      endDate: String,
      description: String,
    },
  ],
  skills: [
    {
      category: String,
      list: [String],
    },
  ],
});

module.exports = mongoose.model("Resume", resumeSchema);
