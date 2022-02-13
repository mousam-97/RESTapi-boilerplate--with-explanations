const express = require('express');

// The express.Router() function is used to create a new router object. 
const router = express.Router();

// adding the Mongo Db model
const Student = require('../models/Students.js');

router.get('/', (req, res) => {
  res.send('This is a get request on api');
});

// 

// This gets us all the students
router.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.json({ message: err });
  }

});


// This submits and saves a student in the database
router.post('/students', async (req, res) => {
  const student = new Student({
    name: req.body.name,
    roll: req.body.roll
  });

  try {
    const savedStudent = await student.save();
    res.json(savedStudent);
  } catch (err) {
    res.json({ message: err });
  }
});

// updates a specific student(based on id) in the database
router.patch('/students/:id', async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id);
    res.json(updatedStudent);
  } catch (err) {
    res.json({ message: err });
  }
});


// deletes a specific student(based on id) in the database
router.delete('/students/:id', async (req, res) => {
  try {
    const removedStudent = await Student.findByIdAndDelete(req.params.id);
    res.json(removedStudent);
  } catch (err) {
    res.json({ message: err });
  }

});

module.exports = router;
