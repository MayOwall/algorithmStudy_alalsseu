---
marp: true
theme: gaia
paginate: true
---

<!-- headingDivider: 2 -->

# Counting 정렬

- 작은 정수인 키에 따라 요소 컬렉션을 정렬하는 데 사용되는 정수 정렬 알고리즘입니다.

### Process

- 배열에서 최대값을 찾는다.
- 최대값 + 1 길이의 Counting 배열을 생성하여 각 요소에 0을 채운다.
- 배열의 각 요소의 빈도를 Counting 배열의 해당 요소 인덱스에 저장합니다.
- Counting 배열 요소에 누적 합계를 저장합니다.
- Counting 배열에서 원래 배열의 각 요소 인덱스를 찾습니다.
- Output 배열에 요소를 배치하고 누적 개수를 하나씩 줄입니다.

## 복잡도

- 시간 복잡도 : O(n + k) => k는 배열에서 등장하는 최대값

- 공간 복잡도 : O(k) => k만큼의 배열을 만들어야 한다.

## 장단점

- 정렬하는 숫자가 특정한 범위 내에 있을 때 사용하기 좋다.
- 시간복잡도가 크지 않다.
- 배열 사이즈 N만큼 돌 때, 증가시켜주는 Counting 배열의 크기가 크다. 즉, 메모리 낭비가 심하다.

## gif로 보는 Counting Sort

![width:1000](https://user-images.githubusercontent.com/76620786/222701210-afb2c101-59e7-470d-b913-cf46a9b6a0d3.gif)
