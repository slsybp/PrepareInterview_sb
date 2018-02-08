
var datas = [23,3,43,12,78,2,90,4,1,11,8,41,5,2];

// 冒泡排序*****************************************************************************************************************************
function bubbleSort(numbers) {
  var len = numbers.length;

  for (var i = 0;i < len; i++) {
    for (var j = 0;j < len - i - 1;j++) {
      if (numbers[j+ 1] < numbers[j]) {
        var temple = numbers[j];
        numbers[j] = numbers[j+1];
        numbers[j+1] = temple;
      }
    }
  }
  return numbers;
}

// 选择排序*****************************************************************************************************************************
function selectSort(numbers) {
  var len = numbers.length;

  for (var i = 0; i < len; i++) {
    for (var j = i + 1; j < len; j++) {
      if (numbers[i] > numbers[j]) {
        var temple = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temple;
      }
    }
  }
  return numbers;
}

// 插入排序*****************************************************************************************************************************
function insertSort(numbers) {
  var len = numbers.length;

  for (var i = 1;i < len; i++) {
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

  var len = numbers.length;
  var gaps = [5,3,1];

  for (var index_gap = 0; index_gap < len; index_gap++) {
    var gap = gaps[index_gap];

    for (var index = gap; index < len;index +=gap) {

      var  value_index = numbers[index];
      var lastIndex = index - gap;

      while (lastIndex > -1 && value_index < numbers[lastIndex]) {
        numbers[lastIndex + gap] = numbers[lastIndex];
        lastIndex -=gap;
      }

      lastIndex +=gap;
      numbers[lastIndex] = value_index;
    }
  }
  return numbers;
}

// 快速排序*****************************************************************************************************************************

function division(numbers, left, right) {
  if (left > right) {
    return;
  }

  while (ri)
}

function quickSort(numbers,leftIndex,rightIndex) {
  if (leftIndex < rightIndex) {
    var  mid = division(numbers, leftIndex , rightIndex);
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

  return numbers;

}

// 桶排序 *****************************************************************************************************************************
function bucketSort(numbers) {
// 假设数字范围为0~100

  var max = 99;
  var min = 1;
  var buckets = Math.floor(max/10 - min/10 + 1);

  var bucketList = [];

  for (var i = 0; i <= buckets; i++) {
    var array = new Array();
    bucketList.push(array);
  }

  for (var i = 0; i < numbers.length; i++) {
    var value = numbers[i];
    var index = Math.floor(value/10);
    var arr = bucketList[index];
    arr.push(value);
  }

  var index_numbers = 0
  for (var i = 0; i <= buckets;i++) {
    if (bucketList[i].length > 0) {
      insertSort(bucketList[i]);

      for (var t = 0;t < bucketList[i].length; t++) {
        numbers[index_numbers++] = bucketList[i][t];
      }
    }
  }
}

// 堆排序 *****************************************************************************************************************************
function  heapSort(array) {

  var size = array.length;

  buildHeap(array);
  for (var i = size - 1;i >= 0; i--) {
    swap(array,0,i);
    adjustHeap(array,0,i - 1);
  }


  // 建堆
  function  buildHeap(a) {
    var size = a.length;
    for (var i = Math.floor((size -1)/2);i >= 0;i--) {
      adjustHeap(a, i, size);
    }
  }

  //调整堆
  function adjustHeap (a, index, size) {

    var lchild = index * 2 + 1;
    var rchild = index * 2 + 2;
    var max = index;

    if (index < Math.floor((size -1)/2)) {
      if (lchild < size && a[lchild] > a[max]) {
        max = lchild;
      }

      if (rchild < size && a[rchild] > a[max]) {
        max = rchild;
      }

      if (max != index) {
        swap(a, max, index);
        adjustHeap(a, max, size);
      }
    }
  }

  //交换元素
  function swap(a, i, j) {
    var temple = a[i];
    a[i] = a[j];
    a[j] = temple;
  }

}

// 测试排序
console.log("元数据   :" + datas+ "\n");

var result;

// var result = bubbleSort(datas);
// var result = selectSort(datas);
// var result = insertSort(datas);
var result = shellSort(datas);
// result = quickSort(datas,0,datas.length - 1);
// result = mergeSort(datas);
// result = bucketSort(datas);

console.log("排列结果 :" + datas);