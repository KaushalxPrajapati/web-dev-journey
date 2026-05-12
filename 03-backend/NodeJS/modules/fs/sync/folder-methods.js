// ==========================================
// FOLDER METHODS
// ==========================================

const fs = require('fs');


// 1. CREATE FOLDER
// fs.mkdirSync('my-folder');



// 2. CREATE NESTED FOLDER
// fs.mkdirSync('parent-folder/child-folder', { recursive: true });
// Creates nested folders.
// recursive: true prevents error if parent folders do not already exist.



// 3. READS FILES & FOLDERS
// const folderItems = fs.readdirSync('.');  // '.' (dot) means the current working directory
// console.log('Folder items:', folderItems);
// console.log(typeof folderItems); // Returns "object" because arrays are technically objects in JavaScript — To verify if an array, use Array.isArray('<PASS THE array>')
// console.log(Array.isArray(folderItems)); // returns true (boolean)



// 4. CHECK FOLDER INFO
// const folderInfo = fs.statSync('my-folder');
// console.log('Is folder:', folderInfo.isDirectory());
// console.log('Is file:', folderInfo.isFile());
// Checks whether the path is a file or folder.



// 5. DELETE EMPTY FOLDER
// fs.rmdirSync('my-folder');
// Deletes an empty folder.



// // 6. DELETE FOLDER WITH FILES
// fs.rmSync('parent-folder', { recursive: true, force: true });
// // Deletes folder even if it contains files/folders.
// // recursive: true means delete everything inside.
// // force: true prevents error if folder does not exist.
