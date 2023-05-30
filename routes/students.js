const express = require('express');
const router = express.Router();
const Student = require('../models/student');

// GET all students
router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        res.json({ message: err });
    }
});

// GET a specific student
router.get('/:studentId', async (req, res) => {
    try {
        const student = await Student.findById(req.params.studentId);
        res.json(student);
    } catch (err) {
        res.json({ message: err });
    }
});

// POST a new student
router.post('/', async (req, res) => {
    const student = new Student({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        department: req.body.department,
        grade: req.body.grade
    });

    try {
        const savedStudent = await student.save();
        res.json(savedStudent);
    } catch (err) {
        res.json({ message: err });
    }
});

// DELETE a specific student
router.delete('/:studentId', async (req, res) => {
    const studentId = req.params.studentId;
    const removedStudent = await Student.findByIdAndDelete({ _id: studentId });
    res.json(removedStudent);
});

// UPDATE a specific student
router.patch('/:studentId', async (req, res) => {
    try {
        const updatedStudent = await Student.updateOne(
            { _id: req.params.studentId },
            { $set: { firstName: req.body.firstName } }
        );
        res.json(updatedStudent);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;