# 거품 정렬 (Bubble Sort)

<br/>

### 🏁 체크 리스트

- [x] 거품 정렬에 대해 설명할 수 있나요?
- [x] 거품 정렬에 과정에 대해 설명할 수 있나요?
- [x] 거품 정렬을 자바스크립트로 구현할 수 있나요?
- [x] 거품 정렬의 시간복잡도와 공간복잡도를 계산할 수 있나요?

<br/>
<br/>
<br/>

## 📍 거품 정렬이란?

### 정의

서로 인접한 두 원소의 대소를 비교하고, 조건의 맞지 않으면 자리를 교환하며 정렬하는 알고리즘

### 이름의 유래

정렬 과정에서 원소의 이동이 마치 거품이 수면으로 올라오는 듯한 모습처럼 보였음에서 유래

### 특징

- 선택 정렬 (Selection Sort)과 유사한 알고리즘
- 최선, 평균, 최악의 경우 모두 시간복잡도가 같다는 특징이 있음

<br/>
<br/>

## 📍 거품 정렬 구현 로직

### 로직 이론

#### 1

1회전에 첫 번째 원소와 두 번째 원소를, 두 번째 원소와 세 번째 원소를, 세 번째 원소와 네 번째 원소를, ... 이런 방식으로 `마지막 - 1` 번째 원소와 마지막 원소를 비교하여, 조건에 맞지 않는다면 서로 교환<br/>

#### 1-1

1회전을 수행하고 나면 가장 큰 원소가 맨 뒤로 이동하면서 그 다음 회전에서부터는 해당 회전의 가장 마지막 원소가 정렬에서 제외된다.
(이와 같이 1회전 정렬이 수행될 때 마다 정렬에서 제외되는 데이터가 하나씩 늘어남)

#### 2

더 이상 수행할 회전이 없을 때 까지 1 ~ 1-1 과정을 반복 해 줌.

<br/>

<img src="https://github.com/GimunLee/tech-refrigerator/raw/master/Algorithm/resources/bubble-sort-001.gif" alt="거품 정렬 gif" width=500>

<small>출처 : Tech Interview</small>

<br/>

### 코드 구현 : 자바스크립트

```js
// rule props에 따른 오름차순 (ascending), 내림차순(descending) 계산 가능
const bubbleSort = (arr, rule) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length - i; j++) {
      switch (rule) {
        // 오름차순일 때
        case "ascending": {
          if (arr[j - 1] > arr[j]) {
            temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
          }
          break;
        }
        // 내림차순일 때
        case "descending": {
          if (arr[j - 1] < arr[j]) {
            temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
          }
          break;
        }
      }
    }
  }
  return arr;
};
```

<br/>
<br/>

## 📍 거품 정렬의 복잡도

### 시간복잡도

`O(n^2)`

> 정렬이 되어있던 되어있지 않던 모든 경우의 수를 탐색하기 때문

<br/>

### 공간복잡도

`O(n)`

> 주어진 배열 안에서 교환을 통해 정렬이 수행되기 때문

<br/>
<br/>

#### 출처

- [Tech Interview : 거품 정렬](https://gyoogle.dev/blog/algorithm/Bubble%20Sort.html)

<br/>
<br/>
<br/>
<br/>
