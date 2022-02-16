// 회문 확인

function isPalindrome(str) {
  let newString = str.replace(/^[A-Za-z0-9]/g, '');
  if (newString === newString.split('').reverse().join('')) {
    return true;
  }
  return false;
}

const bool = isPalindrome('abcba');
console.log(bool);
