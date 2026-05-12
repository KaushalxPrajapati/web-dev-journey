// ==========================================
// FOLDER METHODS
// ==========================================

const fs = require('fs');


// 1. CREATE FOLDER
fs.mkdir('my-folder', function (error) {
    if (error) {
        console.log('Error while creating folder:', error);
        return;
    }

    console.log('Folder created successfully.');
});


// 2. CREATE NESTED FOLDER
fs.mkdir('parent-folder/child-folder', { recursive: true }, function (error) {
    if (error) {
        console.log('Error while creating nested folder:', error);
        return;
    }

    console.log('Nested folder created successfully.');
});


// 3. READ FOLDER
fs.readdir('.', function (error, files) {
    if (error) {
        console.log('Error while reading folder:', error);
        return;
    }

    console.log('Folder items:', files);
});


// 4. CHECK FOLDER INFO
fs.stat('my-folder', function (error, stats) {
    if (error) {
        console.log('Error while checking folder:', error);
        return;
    }

    console.log('Is folder:', stats.isDirectory());
    console.log('Is file:', stats.isFile());
});


// 5. DELETE EMPTY FOLDER
fs.rmdir('my-folder', function (error) {
    if (error) {
        console.log('Error while deleting folder:', error);
        return;
    }

    console.log('Empty folder deleted successfully.');
});


// 6. DELETE FOLDER WITH FILES
fs.rm('parent-folder', { recursive: true, force: true }, function (error) {
    if (error) {
        console.log('Error while deleting folder:', error);
        return;
    }

    console.log('Folder deleted successfully.');
});