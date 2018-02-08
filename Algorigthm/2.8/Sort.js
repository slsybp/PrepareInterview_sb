
var datas = [23,3,43,12,78,2,90,4,1,11,8,41,5,2];

// 冒泡排序*****************************************************************************************************************************
function bubbleSort(numbers) {
  var len = numbers.length;


  return numbers;
}

// 选择排序*****************************************************************************************************************************
function selectSort(numbers) {
  var len = numbers.length;

  return numbers;
}

// 插入排序*****************************************************************************************************************************
function insertSort(numbers) {
  var len = numbers.length;
  for (var i = 1; i < len; i++) {
    var value_i = numbers[i];
    var j = i - 1;
    while (j > -1 && numbers[j] > value_i) {
      numbers[j + 1] = numbers[j];
      j--;
    }

    j++;
    numbers[j] = value_i;
  }
  return numbers;
}

// 希尔排序*****************************************************************************************************************************
function shellSort(numbers) {
  var gaps = [5,3,1];

  for (var i = 0; i < gaps.length; i++) {
    var gap = gaps[i];

    for (var index = gap; index < numbers.length; index += gap) {
      var value_index = numbers[index];
      var lastIndex = index - gap;

      while (lastIndex > -1 && numbers[lastIndex] > value_index) {
        numbers[lastIndex + gap] = numbers[lastIndex];
        lastIndex -= gap;
      }

      lastIndex +=gap;
      numbers[lastIndex] = value_index;
    }
  }

  return numbers;
}

// 快速排序*****************************************************************************************************************************

function division(numbers, left, right) {
  if (left >= right)
    return;

  var base = numbers[left];

  while (left < right) {

    while (left < right && numbers[right] > base) {
      right--;
    }
    numbers[left] = numbers[right];

    while (left < right && numbers[left] <= base) {
      left++;
    }
    numbers[right] = numbers[left];
  }

  numbers[left] = base;
  return left;
}

function quickSort(numbers,leftIndex,rightIndex) {
  if (leftIndex < rightIndex) {
    var mid;
    mid = division(numbers, leftIndex, rightIndex);
    quickSort(numbers, leftIndex, mid - 1);
    quickSort(numbers, mid + 1, rightIndex);
  }
}

// 归并排序 ***************************************************************************************************************************
function mergeSort(numbers) {

  function min (a, b) {
    return a < b ? a : b;
  }

  var len = numbers.length;
  var k;
  var b = [];

  for (var gap = 1; gap < len; gap +=gap) {
    k = 0
    for  (var index = 0; index < len; index += gap + gap) {
      var start1 = index;
      var end1 = min(index + gap,len);

      var start2 = end1;
      var end2 = min(start2 + gap, len);

      while (start1 < end1 && start2 < end2) {
        b[k++] = numbers[start1] < numbers[start2] ? numbers[start1++] : numbers[start2++];
      }

      while (start1 < end1) {
        b[k++] = numbers[start1++];
      }

      while (start2 < end2) {
        b[k++] = numbers[start2++];
      }
    }

    for (var i = 0; i < len; i++) {
      numbers[i] = b[i];
    }
  }
  return numbers;
}

// 桶排序 *****************************************************************************************************************************
function bucketSort(numbers) {
// 假设数字范围为0~100
  var buckets = [];
  var max = 100;
  var max = 0;
  var gap = 10;
  var k = 0;


  for (var i = 0; i < 11; i++) {
    buckets[i] = [];
  }

  for (var i = 0; i < numbers.length; i++) {
    var value = numbers[i];
    var t = Math.floor(value/gap);
    var arr = buckets[t];
    arr.push(value);
  }

  for (var i = 0; i < buckets.length; i++) {
    var arr = buckets[i];
    insertSort(arr);

    for (var t = 0; t < arr.length; t++) {
      numbers[k++] = arr[t];
    }
  }
}

// 堆排序 *****************************************************************************************************************************
function  heapSort(array) {
  var size = array.length;

  buildHeap(array);

  for (var i = size - 1;i >=0; i--) {
    swap(array, 0, i)
    adjustHeap(array, 0 ,i);
  }

  // 创建堆
  function buildHeap(a) {
    var len = a.length;
    for (var i = Math.floor((len - 1) / 2); i >= 0; i--) {
      adjustHeap(a, i, len);
    }
  }
  
  function swap(a, i, j) {
    var temple = a[i];
    a[i] = a[j];
    a[j] = temple;
  }

  // 调整堆
  function adjustHeap(a, index, size) {
    var lchild = index * 2 + 1;
    var rchild = index * 2 + 2;
    var max = index;

    if (lchild < size && a[lchild] > a[max]) {
      max = lchild;
    }

    if (rchild < size && a[rchild] > a[max]) {
      max = rchild;
    }

    if (max != index) {
      swap(a,max,index);
      adjustHeap(a, max, size);
    }
  }
}

// 测试排序
console.log("元数据   :" + datas+ "\n");
var result;

// var result = bubbleSort(datas);
// var result = selectSort(datas);
// var result = insertSort(datas);
// var result = shellSort(datas);
// result = quickSort(datas,0,datas.length - 1);
// result = mergeSort(datas);
result = bucketSort(datas);
// resutl = heapSort(datas);

console.log("排列结果 :" + datas);