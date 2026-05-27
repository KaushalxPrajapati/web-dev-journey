// ==========================================
// FS MODULE - SYNCHRONOUS VERSION
// ==========================================
// Sync methods block the execution.
// Node.js waits until the current file/folder operation is completed.
// Good for learning, small scripts, and simple testing.
// Not recommended for heavy real-world backend apps.
// ==========================================

const fs = require('fs');

// ==========================================
// FILE METHODS
// ==========================================


// 1. CREATE OR WRITE FILE
// fs.writeFileSync('demo.txt', 'Hello Kaushal');
// Creates a file if it does not exist.
// If the file already exists, it replaces the old content.


// 2. READ FILE
// const data = fs.readFileSync('demo.txt', 'utf-8');
// console.log('File data:', data);
// // Reads file content.
// // 'utf-8' converts buffer data into readable text.


// 3. APPEND DATA
// fs.appendFileSync('demo.txt', '\nThis is a new line.');
// Adds new content at the end of the file.
// It does not remove old content.


// 4. RENAME FILE
// fs.renameSync('demo.txt', 'renamed-demo.txt');
// Renames the file.


// 5. COPY FILE
// fs.copyFileSync('renamed-demo.txt', 'copy-demo.txt');
// Copies content from one file to another file.


// 6. CHECK IF FILE EXISTS
// const fileExists = fs.existsSync('folder-methods.js');

// // Returns true if file/folder exists, otherwise false.
// if (fileExists){
//     console.log('Your file DOES exist');
// } else {
//     console.log("Your file does NOT exist");
// }


// 7. DELETE FILE
// fs.unlinkSync('copy-demo.txt');
// Deletes the file permanently.


// 8. GET FILE INFORMATION
// const fileInfo = fs.statSync('folder-methods.js');
// console.log(fileInfo);
// Gives information like size, created time, modified time, etc.
