// 2.4 애너그램

const strs = ['eat', 'repaid', 'paired', 'tea', 'bat'];
/*
  res = [
    ['eat', 'tea'],
    ['repaid', 'paired'],
    ['bat'];
  ]
*/

function anagram(strs) {
  const hash = {};

  strs.forEach((str) => {
    const sortedStr = str.split('').sort().join('');
    if (hash[sortedStr] === undefined) {
      hash[sortedStr] = [];
    }
    hash[sortedStr].push(str);
  });
  const res = Object.values(hash);
  return res;
}

const res = anagram(strs);
console.log(res);
