// FIXME: NOT CORRECT
const nums1 = [1, 3, 5, 7];
const nums2 = [2, 4, 8];

nums1.forEach((num1, index) => {
  if (num1 > nums2[0]) {
    nums1.splice(index, 0, nums2[0]);
    nums2.splice(0, 0, num1);

    for ([index, num2] of Object.entries(nums2.slice(1))) {
      if (num1 <= num2) {
        nums2.splice(index - 1, 0, num1);
        break;
      }
      nums2.splice(index - 1, 0, nums2[index]);
    }
  }
});

console.log(nums1, nums2);
