function avg() {
  let nums = [];
  for (let i = 0; i < 3; i++) {
    // Wrap prompt in Number() to convert "1", "2" and "3" to 1, 2 and 3 respectively
    nums.push(Number(prompt(`Enter ${i + 1}st No.`)));
  }
  return (nums[0] + nums[1] + nums[2]) / 3;
}

console.log(avg());
