function threeSum(nums, n) {
  const totalSum = (n * (n + 1)) / 2;
  let arraySum = 0;

  for (let i = 0; i < nums.length; i++) {
    arraySum += nums[i];
  }

  const missingNumber = totalSum - arraySum;
  return missingNumber;
}

// Example usage



module.exports = threeSum;
