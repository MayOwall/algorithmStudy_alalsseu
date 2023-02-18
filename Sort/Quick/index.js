function QuickSort(array) {
  if (array.length < 2) return array;

  const pivot = [array[0]];
  const left = [];
  const right = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > pivot[0]) {
      right.push(array[i]);
    }
    if (pivot[0] > array[i]) {
      left.push(array[i]);
    }
    if (pivot[0] === array[i]) {
      pivot.push(array[i]);
    }
  }
  return QuickSort(left).concat(pivot, QuickSort(right));
}

const sorted = QuickSort([5, 3, 7, 1, 9]);
console.log(sorted);

// 메모리 개선을 위한 in place 구현 방법
function quickSort2(array, left = 0, right = array.length - 1) {
  if (left >= right) return;
  const mid = Math.floor((left + right) / 2);
  const pivot = array[mid];
  const partition = divide(array, left, right);

  quickSort2(array, left, partition - 1);
  quickSort2(array, partition, right);

  function divide(array, left, right) {
    while (array[left] < pivot) {
      left++;
    }
    while (left < right && pivot < array[right]) {
      right--;
    }
    if (left <= right) {
      const temp = array[left];
      array[left] = array[right];
      array[right] = temp;
      left++;
      right--;
    }
    return left;
  }

  return array;
}

const sorted2 = quickSort2([5, 3, 7, 1, 9]);
console.log(sorted2);
