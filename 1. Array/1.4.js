// 1.4 정렬된 배열에서 중복 제거

/*
 * @param {object} nums 정수형 배열
 * @returns {number} 배열의 길이
 */

// Brute-force
// function removeDuplicates(nums) {
//   let cur = nums[nums.length - 1];
//   let cnt = 1;
//   for (let i = nums.length - 2; i >= 0; i--) {
//     if (cur === nums[i]) {
//       nums.splice(i, 1);
//     } else {
//       cur = nums[i];
//       cnt++;
//     }
//   }
//   return cnt;
// }

// Set
function removeDuplicates(nums) {
  nums = [...new Set(nums)];
  return nums.length;
}

const length = removeDuplicates([0, 0, 0, 1, 2, 2, 2]);
console.log(length);
