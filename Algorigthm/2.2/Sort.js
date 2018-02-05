
var datas = [23,3,43,12,78,2,90,4,1,101,8,413,5,2];

// 冒泡排序*****************************************************************************************************************************
function bubbleSort(numbers) {
  var len = numbers.length;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - i - 1; j++) {
      if (numbers[j] > numbers[j+1]) {
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

  for (var i = 1; i < len; i++) {
    var  value_i = numbers[i]
    var  j = i - 1;
    while (j > -1 && numbers[j] > value_i) {
      numbers[j + 1] = numbers[j--];
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

  for(var i = 0;i < gaps.length; i++) {
    var gap = gaps[i];

    for (var index = 0; index < len; index +=gap) {
      var value_index = numbers[index];
      var j = index - gap;

      while (j > -1 && numbers[j] > value_index) {
        numbers[j + gap] = numbers[j];
        j -= gap;
      }

      j +=gap;
      numbers[j] = value_index;
    }
  }
  return numbers;
}

// 快速排序*****************************************************************************************************************************

function division(numbers, left, right) {

  if (left > right)
    return;

  var len = numbers.length;

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
  var teamLength = 1;
  var b = [];
  var k = 0;

  for (teamLength = 1; teamLength < len; teamLength += teamLength) {
    k = 0;

    for (var index = 0; index < len; index += teamLength + teamLength) {

      var low1 = index;
      var end1 = min(index + teamLength, len);

      var low2 = end1 ;
      var end2 = min(low2 + teamLength, len);

      while (low1 < end1 && low2 < end2) {
        b[k++] = numbers[low1] < numbers[low2] ? numbers[low1++] : numbers[low2++];
      }

      while (low1 < end1) {
        b[k++] = numbers[low1++];
      }

      while (low2 < end2) {
        b[k++] = numbers[low2++];
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


}

// // 堆排序 *****************************************************************************************************************************
// function  heapSort() {
//
// }

// 测试排序
console.log("元数据   :" + datas+ "\n");

var result;

// var result = bubbleSort(datas);
// var result = selectSort(datas);
// var result = insertSort(datas);
// var result = shellSort(datas);
// result = quickSort(datas,0,datas.length - 1);
result = mergeSort(datas);

console.log("排列结果 :" + datas);