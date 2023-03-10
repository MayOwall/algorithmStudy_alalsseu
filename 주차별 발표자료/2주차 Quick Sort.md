---
marp: true
theme: gaia
paginate: true
---

<!-- headingDivider: 2 -->

# Quick 정렬

- 분할 정복 방법을 통해 주어진 배열을 정렬한다.
- 불안정 정렬에 속하며, 다른 원소와의 비교만으로 정렬을 수행하는 비교 정렬에 속한다.

### Process

1. 배열 가운데 하나의 원소(pivot)을 고른다.
2. 피벗 값보다 작은 모든 원소들의 배열과 비벗 값보다 큰 모든 원소들의 배열 둘로 나눈다.(분할)
3. 분할된 두 개의 작은 배열에 대해 재귀적으로 이 과정을 반복한다.

## GIF로 이해하기

![width:1000](https://user-images.githubusercontent.com/76620786/219828933-56d91094-1d9c-4133-8c17-0af2f3046393.gif)

## 복잡도

### 시간

최선: O(nlogn)
최악: O(n^2)
평균: O(nlogn)

### 공간

- 주어진 배열 안에서 교환을 통해 정렬이 수행되므로 O(n)

---

### 장점

- 불필요한 데이터의 이동을 줄이고 먼 거리의 데이터를 교환할 뿐만 아니라, 한 번 결정된 피벗들이 추후 연산에서 제외되는 특성 때문에, 시간 복잡도가 O(nlog₂n)를 가지는 다른 정렬 알고리즘과 비교했을 때도 가장 빠르다.
- 정렬하고자 하는 배열 안에서 교환하는 방식이므로, 다른 메모리 공간을 필요로 하지 않는다.

### 단점

- 불안정 정렬이다
- 정렬된 배열에 대해서는 Quick Sort의 불균형 분할에 의해 오히려 수행시간이 더 많이 걸린다.
