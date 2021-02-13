/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

const moveZeroes = (nums) => {
  //Loop through nums arr
  for (let index = 0; index < nums.length; index++) {
    const curNum = nums[index];
    // check if the current element is a 0
    if (curNum === 0) {
      // If a 0 remove and attach to the end of the array
      const holder = nums.splice(index, 1);
      nums.push.apply(nums, holder);
    }
  }
  console.log('nums', nums);
  return nums;
  // Return the array
};

moveZeroes([0, 1, 0, 3, 12]);
