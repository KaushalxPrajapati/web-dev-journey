// ==========================================
// FS MODULE - ASYNCHRONOUS VERSION
// ==========================================
// Async methods do not block execution.
// Node.js starts the task and continues running other code.
// When the task finishes, callback function runs.
// Better for real-world backend applications.
// ==========================================

const fs = require('fs');

// ==========================================
// FILE METHODS
// ==========================================


// 1. CREATE OR WRITE FILE
fs.writeFile('demo.txt', 'Hello Kaushal', function (error) {
    if (error) {
        console.log('Error while writing file:', error);
        return;
    }

    console.log('File created/written successfully.');
});


// 2. READ FILE
fs.readFile('demo.txt', 'utf-8', function (error, data) {
    if (error) {
        console.log('Error while reading file:', error);
        return;
    }

    console.log('File data:', data);
});


// 3. APPEND DATA
fs.appendFile('demo.txt', '\nThis is a new line.', function (error) {
    if (error) {
        console.log('Error while appending file:', error);
        return;
    }

    console.log('Data added successfully.');
});


// 4. RENAME FILE
fs.rename('demo.txt', 'renamed-demo.txt', function (error) {
    if (error) {
        console.log('Error while renaming file:', error);
        return;
    }

    console.log('File renamed successfully.');
});


// 5. COPY FILE
fs.copyFile('renamed-demo.txt', 'copy-demo.txt', function (error) {
    if (error) {
        console.log('Error while copying file:', error);
        return;
    }

    console.log('File copied successfully.');
});


// 6. CHECK IF FILE EXISTS
fs.access('renamed-demo.txt', fs.constants.F_OK, function (error) {
    if (error) {
        console.log('File does not exist.');
        return;
    }

    console.log('File exists.');
});


// 7. DELETE FILE
fs.unlink('copy-demo.txt', function (error) {
    if (error) {
        console.log('Error while deleting file:', error);
        return;
    }

    console.log('File deleted successfully.');
});


// 8. GET FILE INFORMATION
fs.stat('renamed-demo.txt', function (error, stats) {
    if (error) {
        console.log('Error while getting file info:', error);
        return;
    }

    console.log('File size:', stats.size);
    console.log('Is file:', stats.isFile());
    console.log('Is folder:', stats.isDirectory());
});