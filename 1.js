// const k = 3;
// const m = 50000;
// const names = [
//   'msLee',
//   'jsKim',
//   'jsKIM',
//   'jskiM',
//   'jskim',
//   'John',
//   'john',
//   'John',
//   'msLEE',
//   'msLEE',
//   'jsKIM',
//   'roy',
// ];
// const amount = [
//   950, 52524, 1400, 6055, 10000, 4512, 512, 52000, 9000, 49000, 1400, 50000,
// ];
// return = 5;

const k = 2;
const m = 3451;
const names = ['abcd', 'aBCd', 'jsKIM', 'rrr', 'rrr'];
const amount = [950, 1000, 1400, 4000, 10000];

function solution(k, m, names, amount) {
  let hashTable = {};
  let sendCount = 0;

  names.forEach((name, idx) => {
    if (hashTable[name.toLowerCase()]) {
      hashTable[name.toLowerCase()] += 1;
    } else {
      hashTable = {};
      hashTable[name.toLowerCase()] = 1;
    }

    if (amount[idx] >= m || hashTable[name.toLowerCase()] >= k) {
      console.log('sendCount + 1');
      sendCount++;
    }
  });
  return sendCount;
}

const result = solution(k, m, names, amount);
console.log(result);
