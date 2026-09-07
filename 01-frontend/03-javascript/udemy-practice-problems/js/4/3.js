// Count Vowels in a String

// Method 1
function countVowels(str) {
    let count = 0;
    const vowelsArr = ['a', 'e', 'i', 'o', 'u'];
    const strArr = [...str];
    for (let i = 0; i < strArr.length; i++) {
        const char = strArr[i].toLowerCase();
        if (vowelsArr.includes(char)) {
            count++;
        }
    }
    return count;
}

// Method 2
// function countVowels(str) {
//     let count = 0;
//     const vowels = 'aeiouAEIOU';
//     for (let char of str) {
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }
//     return count;
// }

let str = 'aeiou';
console.log(countVowels(str));

str = 'Kaushal';
console.log(countVowels(str));
