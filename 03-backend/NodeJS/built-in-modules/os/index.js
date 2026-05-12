const fs = require('fs');

//Create file
// fs.writeFileSync('create.txt', 'HELLO');

// Read file
// let data = fs.readFileSync('create.txt', 'utf-8');
// console.log('Your data is:', data);

// Rename
// fs.renameSync('create.txt', 'demo.txt');

// Delete
fs.unlinkSync('demo.txt');
const fs = require('fs');

// ==========================================
// FILE SYSTEM (fs) MODULE
// Used to work with files and folders
// ==========================================

// ==========================================
// 1. CREATE A FILE
// writeFileSync(fileName, data)
// ==========================================

// fs.writeFileSync('create.txt', 'HELLO');
// Creates a new file and writes data into it.
// If the file already exists, it overwrites the content.

// ==========================================
// 2. READ A FILE
// readFileSync(fileName, encoding)
// ==========================================

// let data = fs.readFileSync('create.txt', 'utf-8');

// console.log('Your data is:', data);
// Reads the file content.
// 'utf-8' converts buffer data into readable text.

// ==========================================
// 3. RENAME A FILE
// renameSync(oldName, newName)
// ==========================================

// fs.renameSync('create.txt', 'demo.txt');
// Renames the file.

// ==========================================
// 4. DELETE A FILE
// unlinkSync(fileName)
// ==========================================

// fs.unlinkSync('demo.txt');
// Deletes the file completely.