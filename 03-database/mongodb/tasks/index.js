const mongoose = require('mongoose');

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/studentDB');
}

main()
    .then(() => {
        console.log('Connected to MongoDB!');
    })

    .catch((err) => {
        console.log(err);
    });

const studentSchema = new mongoose.Schema({
    _id: Number,
    name: {
        type: String,
        required: true,
        minlength: 3,
        trim: true,
    },
    age: {
        type: Number,
        required: true,
        min: 15,
        max: 35,
    },
    city: {
        type: String,
        enum: ['Jamshedpur', 'Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata', 'Pune', 'Hyderabad'],
        required: true,
    },
    score: {
        type: Number,
        min: 0,
        max: 100,
    },
    tags: [String],
    hobbies: {
        sports: String,
        music: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Making Model named "Student"
const Student = mongoose.model('student', studentSchema);

// ---------------------------------------------------
//                      Task 1
// ---------------------------------------------------
async function findStudentByName(name) {
    try {
        const resultedStudent = await Student.findOne({ name: studentName });
        console.log(resultedStudent);
    } catch (error) {
        console.log('Error:', error);
    }
}

let studentName = 'Sneha';
// findStudentByName(studentName);

// ---------------------------------------------------
//                      Task 2
// ---------------------------------------------------

async function findHighScorers() {
    try {
        let count = 0;
        const resultedStudent = await Student.find({ score: { $gt: 85 } });
        resultedStudent.forEach((student) => {
            ++count;
            console.log(`${count}. ${student.name}`);
        });
        console.log(`Total Students are: ${count}`);
    } catch (error) {
        console.log(error);
    }
}

// findHighScorers();

// ---------------------------------------------------
//                      Task 3
// ---------------------------------------------------

async function findByCity(city) {
    try {
        const resultedStudent = await Student.find({ city: city });
        resultedStudent.forEach((student) => {
            console.log(`Name: ${student.name}`);
            console.log(`Score: ${student.score} \n`);
        });
    } catch (error) {
        console.log(error);
    }
}

// findByCity('Delhi');
// findByCity('Mumbai');

// ---------------------------------------------------
//                      Task 4
// ---------------------------------------------------

async function updateStudentScore(id) {
    try {
        const result = await Student.findByIdAndUpdate(id, { score: 90 }, { new: true });
        console.log('Updated Student:', result);
    } catch (error) {
        ``;
        console.log('Error:', error);
    }
}

// updateStudentScore(3);

// ---------------------------------------------------
//                      Task 5
// ---------------------------------------------------

async function updateCityForMultiple(city) {
    try {
        const result = await Student.updateMany(
            { city: city },
            { $set: { city: 'Hyderabad' } },
            { runValidators: true }
        );
        console.log(result.modifiedCount);
    } catch (error) {
        console.log(error);
    }
}

// updateCityForMultiple('Chennai');

// ---------------------------------------------------
//                      Task 6
// ---------------------------------------------------

async function fixLowScores() {
    try {
        // Step 1: Find students with score < 80
        const lowScorers = await Student.find({ score: { $lt: 80 } });

        // Log their names before update
        console.log('Students before update:');
        lowScorers.forEach((student) => {
            console.log(`${student.name}: ${student.score}`);
        });

        // Step 2: Update ALL students with score < 80 to score = 80
        const updateResult = await Student.updateMany(
            { score: { $lt: 80 } },
            { $set: { score: 80 } },
            { runValidators: true }
        );

        console.log(`\n✅ Updated ${updateResult.modifiedCount} students`);

        // Step 3: Fetch and log updated students
        const updatedStudents = await Student.find({ _id: { $in: lowScorers.map((s) => s._id) } });
        console.log('\nStudents after update:');
        updatedStudents.forEach((student) => {
            console.log(`${student.name}: ${student.score}`);
        });
    } catch (error) {
        console.log('Error:', error);
    }
}

// fixLowScores();

// ============================================
//                   TASK 7
// ============================================

async function updateSingleTagStudents() {
    try {
        // Step 1: Find students with only 1 tag (BEFORE)
        const oldStudents = await Student.find({ tags: { $size: 1 } });

        console.log('📊 BEFORE UPDATE:');
        console.log(`Found ${oldStudents.length} students with 1 tag\n`);
        oldStudents.forEach((student) => {
            console.log(`  Name: ${student.name} | Score: ${student.score} | Tags: [${student.tags}]`);
        });

        // Step 2: Update all at once
        const updateResult = await Student.updateMany(
            { tags: { $size: 1 } },
            {
                $push: { tags: 'Updated' },
                $inc: { score: 5 },
            },
            { runValidators: true }
        );

        console.log(`\nUpdated ${updateResult.modifiedCount} students\n`);

        // Step 3: Fetch AGAIN to show updated data
        const newStudents = await Student.find({ tags: { $size: 2 } });

        console.log('AFTER UPDATE:');
        console.log(`Found ${newStudents.length} students with 2 tags\n`);
        newStudents.forEach((student) => {
            console.log(`  Name: ${student.name} | Score: ${student.score} | Tags: [${student.tags}]`);
        });

        console.log('\n========== TASK 7 COMPLETE ==========\n');
    } catch (error) {
        console.log('Error:', error.message);
    } finally {
        // Close connection
        await mongoose.connection.close();
        console.log('🔌 MongoDB connection closed');
        process.exit(0);
    }
}
