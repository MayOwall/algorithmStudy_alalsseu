// 숫자의 해당 자릿수의 숫자를 리턴하는 함수
const getDigit = (num, i) => {
  const arr = num.toString().split("").reverse();
  return Number(arr[i]);
};

// 숫자들 중 가장 큰 자릿수를 리턴하는 함수
const getMaxDigitCount = (nums) => {
  return nums.reduce(
    (acc, cur) =>
      cur.toString().length > acc ? (acc = cur.toString().length) : null,
    0
  );
};

// Radix Sort
function Radix(nums) {
  const maxDigitCount = getMaxDigitCount(nums);

  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < nums.length; i++) {
      // 해당하는 자릿수가 없을 경우 0으로 대체
      let digit = getDigit(nums[i], k) || 0;
      digitBuckets[digit].push(nums[i]);
    }

    nums = [].concat(...digitBuckets);
  }
  return nums;
}

console.log(Radix([1, 2, 334, 23423, 32, 221])); // [ 1, 2, 32, 221, 334, 23423 ]
