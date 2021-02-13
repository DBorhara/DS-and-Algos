/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

*/

const maxSubArray = (nums) => {
  let sum = nums[0];
  let max = nums[0];
  // -2... reset 1 ...reset 4...3...5...6
  for (let i = 1; i < nums.length; i++) {
    // current number in array
    let curNum = nums[i];
    // Checking if the higher number is the current sum + current number in array or current number
    sum = Math.max(sum + curNum, curNum);

    // Checking if the higher number is then the max or the sum e.g. -2 < 1 so one becomes the new max
    max = Math.max(max, sum);

    /*
    1st loop(1): -2 + 1 vs 1 1 is new sum
    1st loop: -2 vs 1 1 is the new max
    2nd loop (-3): 1 + -3 vs -3 -2 is the new sum
    2nd loop: -2 vs 1 1 stays the max
    3rd loop(4): 4 + -2 vs 4 4 is the new sum
    3rd loop: 4 vs 1 4 is the new max
    4th loop(-1): 4 + -1 vs -1 3 is the new sum
    4th loop:  4 vs 3  4 stays the max
    5th loop(2): 3+2 vs 2  5 is the new sum
    5th loop: 4 vs 5 5 is the new max
    6th loop(1): 5+1 vs 1 6 is the new sum
    6th loop: 5 vs 6 6 is the new max
    7th loop(-5): 6 + -5 vs -5 1 is the new sum
    7th loop: 6 vs 1 6 stays the max
    8th loop(4): 1 + 4 vs 4 5 is the new sum
    8th loop: 6 vs 5 6 stays the max
    **We return 6 since it is the max at the end of the loop**
   */
  }
  // After the loop we return the max number
  console.log('max', max);
  return max;
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
