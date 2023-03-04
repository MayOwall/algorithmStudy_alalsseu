function heapSort(array) {
  const n = array.length;

  // init, max heap
  for (let i = Math.floor(n / 2); i >= 0; i--) {
    heapify(array, n, i);
  }
  // for extract max element from heap
  for (let i = n - 1; i > 0; i--) {
    swap(array, 0, i);
    heapify(array, i, 0);
  }

  return array;
}

function heapify(array, n, i) {
  let p = i;
  let l = i * 2 + 1;
  let r = i * 2 + 2;

  //왼쪽 자식노드
  if (l < n && array[p] < array[l]) {
    p = l;
  }
  //오른쪽 자식노드
  if (r < n && array[p] < array[r]) {
    p = r;
  }

  //부모노드 < 자식노드
  if (i != p) {
    swap(array, p, i);
    heapify(array, n, p);
  }
}

function swap(array, a, b) {
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}
