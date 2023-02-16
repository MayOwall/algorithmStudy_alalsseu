# 삽입 정렬 (Insertion Sort)

<br/>

### 🏁 체크 리스트

- [x] 삽입 정렬에 대해 설명할 수 있나요?
- [x] 삽입 정렬의 과정에 대해 설명할 수 있나요?
- [x] 삽입 정렬을 자바스크립트로 구현할 수 있나요?
- [x] 삽입 정렬의 시간복잡도와 공간복잡도를 계산할 수 있나요?

<br/>
<br/>
<br/>

## 📍 삽입 정렬이란?

### 정의

2번째 원소부터 앞의 원소들과 비교하여 삽입할 위치를 지정한 후, 원소를 뒤로 옮기고 시정된 자리에 자료를 삽입하는 알고리즘

### 특징

- 선택 정렬 (Selection Sort)과 유사하나, 보다 효율적임
- 빠른 효율성 : 최선의 경우 O(N) 시간 복잡도를 가짐

### 장점

- 단순한 알고리즘
- 대부분의 원소가 이미 정렬되어 있는 경우, 매우 효율적
- \*<u>안정 정렬</u> (Stable Sort)
- Selection Sort, Bubble Sort에 비해 상대적으로 빠름

> \*안정 정렬
> 중복된 값을 입력 순서와 동일하게 정렬하는 알고리즘들의 특성을 의미.
> 삽입정렬, 병합정렬, 버블정렬 등이 이에 해당됨

### 단점

- 평균 / 최악 시간복잡도가 O(n^2)로, 이경우 매우 비효율적
- 배열의 길이가 길어질수록 비효율적

<br/>
<br/>

## 📍 삽입 정렬 구현 로직

### 로직 이론

#### 1

2번째 index의 값을 temp에 저장

#### 2

temp와 temp의 index 이전에 있는 원소들을 비교하며 삽입해 나감

#### 3

1로 돌아가 반복

<br/>

<img src="https://github.com/GimunLee/tech-refrigerator/raw/master/Algorithm/resources/insertion-sort-001.gif" alt="삽입 정렬 gif" width=500>

<small>출처 : Tech Interview</small>

<br/>

### 코드 구현 : 자바스크립트

```js
// rule props에 따른 오름차순 (ascending), 내림차순(descending) 계산 가능
const insertionSort = (arr: number[], rule: "ascending" | "descending") => {
  for (let idx = 1; idx < arr.length; idx++) {
    const temp = arr[idx];
    const prev = idx - 1;
    switch (rule) {
      // 오름차순 정렬
      case "ascending": {
        while (prev >= 0 && arr[prev] > temp) {
          arr[prev + 1] = arr[prev];
          prev--;
        }
        arr[prev + 1] = temp;
        break;
      }
      // 내림차순 정렬
      case "descending": {
        while (prev >= 0 && arr[prev] < temp) {
          arr[prev + 1] = arr[prev];
          prev--;
        }
        arr[prev + 1] = temp;
      }
    }
  }
  return arr;
};
```

<br/>
<br/>

## 📍 삽입 정렬의 복잡도

### 시간복잡도

`O(n^2)` || `O(n)`

> 최선의 경우 (이미 정렬이 되어 있는 경우) 한번씩 밖에 비교를 하지 않으므로 `O(n)`이 소요된다.
> 최악의 경우, 모든 정렬을 다 해줘야 하기 때문에 `O(n^2)` 시간이 소요된다.

<br/>

### 공간복잡도

`O(n)`

> 주어진 배열 안에서 교환을 통해 정렬이 수행되기 때문

<br/>
<br/>

#### 출처

- [Tech Interview : 삽입 정렬](https://gyoogle.dev/blog/algorithm/Insertion%20Sort.html)

<br/>
<br/>
<br/>
<br/>
