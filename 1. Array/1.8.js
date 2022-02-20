// Pascal Triangle

/*
 * @param {number} n 정수
 * @returns {object} nums 정수형 배열
 */
function pascalTriangle(n) {
  if (n === 0) return result;
  if (n === 1) return [[1]];
  if (n === 2) return [[1], [1, 1]];

  const result = [[1], [1, 1]];

  for (let i = 2; i < n; i++) {
    const tempArr = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        tempArr.push(1);
      } else {
        tempArr.push(result[i - 1][j - 1] + result[i - 1][j]);
      }
    }
    result.push(tempArr);
  }
  return result;
}

const arr = pascalTriangle(5);
console.log(arr);
