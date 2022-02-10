//  1.6 정렬된 배열의 병합

/*
 * @param {object} nums1 정수형 배열
 * @param {object} nums2 정수형 배열
 * returns {object} 정수형 배열
 */

function merge(nums1, nums2) {
  for (let i = 0; i < nums2.length; i++) {
    for (let j = 0; j < nums1.length; j++) {
      if (nums2[i] <= nums1[j]) {
        nums1.splice(j, 0, nums2[i]);
        break;
      }
      if (j === nums1.length - 1) {
        nums1.push(nums2[i]);
        break;
      }
    }
  }
  console.log(nums1);
}

merge([1, 2, 3], [2, 5, 6]);
