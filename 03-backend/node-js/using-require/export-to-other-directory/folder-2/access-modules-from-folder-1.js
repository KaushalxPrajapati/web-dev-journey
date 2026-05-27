// Located in 'folder-2' — goal is to access modules exported from a sibling directory 'folder-1'
// require('../folder-1') resolves to folder-1/index.js automatically (Node.js default behavior)
const fruitsInfo = require('../folder-1');

// Method 1 - traditional for loop
// for (let i = 0; i < fruitsInfo.length; i++) {
//     console.log(`${fruitsInfo[i].name} is ${fruitsInfo[i].color}`);
// }

// Method 2 - forEach (cleaner, preferred for simple iteration)
fruitsInfo.forEach((fruit) => {
    console.log(`${fruit.name} is ${fruit.color}`);
});
