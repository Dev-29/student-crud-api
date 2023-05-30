const dotenv = require('dotenv');
const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');

dotenv.config();


const Student = require('../models/student');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL);

// Generate random student data
const generateRandomStudentData = () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const age = faker.number.int({ min: 18, max: 25 });
    const department = faker.helpers.arrayElement(['Computer Science', 'Electrical Engineering', 'Mechanical Engineering', 'Civil Engineering', 'Chemical Engineering']);
    const grade = faker.helpers.arrayElement(['A', 'B', 'C', 'D', 'E', 'F']);

    return {firstName, lastName, age, department, grade};
}

// Seed random students
const seedRandomStudents = async () => {
    await Student.deleteMany({});
    for (let i = 0; i < 10; i++) {
        const studentData = generateRandomStudentData();
        const student = new Student(studentData);
        await student.save();
    }
}

// Close MongoDB connection
seedRandomStudents().then(() => {
    mongoose.connection.close();
})