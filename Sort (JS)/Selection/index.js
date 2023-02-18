function InsertionSort(nums) {
  let indexMin, temp;
  for (let i = 0; i < nums.length; i++) {
    indexMin = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[indexMin]) {
        indexMin = j;
      }
    }
    // arr[indexMin]와 arr[i] 스왑
    temp = nums[indexMin];
    nums[indexMin] = nums[i];
    nums[i] = temp;
  }
}
