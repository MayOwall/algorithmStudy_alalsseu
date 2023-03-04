---
marp: true
theme: gaia
paginate: true
---

<!-- headingDivider: 2 -->

# Merge 정렬

큰 문제를 작은 문제 단위로 쪼개면서 해결해나가는 방식

### Process

1. 요소를 쪼갬.
2. 다시 합병시키면서 정렬

## 언제 사용하는가?

- LinkedList의 정렬이 필요할 때

  - LinkedList를 퀵정렬 정렬하면 효율이 좋지 않음
  - cf. LinkedList는 삽입, 삭제 연산에서는 유용하지만, 접근 연산에서는 비효율적임

## 특징

- 빠른 정렬로 분류되며, 퀵소트와 함께 많이 언급되는 정렬 방식이다.

- 안정 정렬이다.

- 시간 복잡도는 평균 `Θ(nlogn)`, 최선 `Ω(nlogn)`, 최악 `O(nlogn)`이다.
