// 양의 정수를 정렬할 때
const countingSort = (inputArr, n = inputArr.length) => {
  let k = Math.max(...inputArr);
  let t;
  // 최대값 + 1 길이의 0으로 채워진 임시 배열 생성
  const temp = new Array(k + 1).fill(0);

  // inputArr의 각 원소들의 빈도를 계산하고 temp에 저장
  for (let i = 0; i < n; i++) {
    t = inputArr[i];
    temp[t]++;
  }

  // 이전 인덱스를 기반으로 개수 업데이트
  for (let i = 1; i <= k; i++) {
    temp[i] = temp[i] + temp[i - 1];
  }

  const outputArr = new Array(n).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    // OutputArr 요소 추가
    t = inputArr[i];
    outputArr[temp[t] - 1] = t;

    // 카운트 값 1씩 감소
    temp[t] = temp[t] - 1;
  }

  return outputArr;
};

// 음의 정수가 있을 때
const countingSortNegative = (arr, n = arr.length) => {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let range = max - min + 1;
  let count = new Array(range).fill(0);
  let output = new Array(n).fill(0);

  // 빈도 저장
  for (let i = 0; i < n; i++) {
    count[arr[i] - min]++;
  }

  // 빈도 축적
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  // 빈도 기반 정렬
  for (let i = n - 1; i >= 0; i--) {
    output[count[arr[i] - min] - 1] = arr[i];
    count[arr[i] - min]--;
  }

  return output;
};
