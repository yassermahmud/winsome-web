var mongoose = require('mongoose');

var StudentHRSchema = new mongoose.Schema({
  computerNumber: { type: String, unique: true, required: true },
  updated_at: { type: Date, default: Date.now },
  studentHR: {
    studentDetails: {
      studentName: String,
      bForm: String,
      dob: String,
      gender: String,
      discount: Number,
      hafiz: Boolean,
      orphan: Boolean,
      siblings: Boolean,
      highlight: Boolean
    },
    fatherDetails: {
      fatherName: String,
      fatherCnic: String,
      fatherMobile: String,
      motherMobile: String,
      homeNumber: String,
      occupation: String,
      fatherAddress: String
    },
    classDetails: {
      oldNumber: String,
      computerNumber: String,
      admissionDate: String,
      class: String,
      section: String,
      subject: String
    },
    emergencyDetails: {
      emergencyName: String,
      emergencyRelation: String,
      emergencyNumber: String,
      medicalNotes: String
    }
  }
});

module.exports = mongoose.model('Student', StudentHRSchema);
