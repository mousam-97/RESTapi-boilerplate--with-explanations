const mongoose = require('mongoose')

// creating a schema for Student model
const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  roll: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Student', studentSchema)
