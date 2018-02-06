
var datas = [23,3,43,12,78,2,90,4,1,101,8,413,5,2];

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

  return numbers;
}

// 希尔排序*****************************************************************************************************************************
function shellSort(numbers) {

  var len = numbers.length;
  var gaps = [5,3,1];


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

  return numbers;

}

// 桶排序 *****************************************************************************************************************************
function bucketSort(numbers) {


}

// 堆排序 *****************************************************************************************************************************
function  heapSort(array) {

  var size = array.length;

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
result = heapSort3(datas);

console.log("排列结果 :" + datas);