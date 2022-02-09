// 1.5 배열에서 삽입 위치 찾기

/*
 * @param {object} nums 정수형 배열
 * @returns {number} 인덱스 값
 */

// Brute-force
// function searchIndex(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     if (target <= nums[i]) return i;
//   }
// }

// Binary Search
function searchIndex(nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.trunc((low + high) / 2);

    if (target === nums[mid]) return mid;

    if (target > nums[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low;
}

const index = searchIndex([1, 4, 5, 6], 3);
console.log(index);
