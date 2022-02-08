// 1.3 두 수의 합 찾기

/*+
 * @param {object} nums 정수형 배열
 * @param {number} target 타겟 값
 * @returns {number} 인덱스 값
 */

// Brute-force
// function twoSums(nums, target) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }

// Hash table
function twoSums(nums, target) {
  const hashTable = {};
  for (let i = 0; i < nums.length; i++) {
    const value = target - nums[i];
    if (hashTable[value] !== undefined) {
      return [hashTable[value], i];
    }
    hashTable[nums[i]] = i;
  }
}

const answer = twoSums([2, 7, 10, 9], 9);
console.log(answer);
