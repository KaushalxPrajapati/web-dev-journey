// Find the Longest Word

// Method 1
// const findLongestWord = (arr) => {
//     arr.reduce((longest, current) => (current.length > longest.length ? current : longest), '');
// };

// Method 2
const findLongestWord = (arr) => {
    return arr.reduce((longest, current) => {
        if (current.length > longest.length) {
            return current;
        }
    });
};

const str = 'I am Kaushal Prajapati';
const strArr = str.trim().split(' ');
console.log(findLongestWord(strArr));
