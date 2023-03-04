function merge(arr, left, mid, right) {
  const L = arr.slice(left, mid + 1);
  const R = arr.slice(mid + 1, right);

  const i = (j = 0);
  const k = left;
  const Ll = L.length;
  const Rl = R.length;

  while (i < Ll && j < Rl) {
    L[i] <= R[j] ? (arr[k] = L[i++]) : (arr[k] = R[j++]);
    k++;
  }
  while (i < Ll) {
    arr[k++] = L[i++];
  }
  while (j < Rl) {
    arr[k++] = R[j++];
  }
}

function mergeSort(arr, left, right) {
  if (left < right) {
    const mid = (left + right) / 2;
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
  }
}
