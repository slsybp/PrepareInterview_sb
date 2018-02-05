
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

  // 交换元素
  function swap (a,i, j) {

    var temple = a[i];
    a[i] = a[j];
    a[j] = temple;
  }

  // 建立堆
  function buildHeap (a) {

    var i ;
    for (i = Math.floor((a.length -1)/ 2); i >= 0; i --) {
      ajustHeap(a,i,a.length);
    }
  }

 function ajustHeap (a, index, size) {

    var lchild = index * 2 + 1;
    var rchild = index * 2 + 2;
    var max = index;

    if (index < size/2) { // 如果是叶子节点不做任何调整

      if (lchild < size && a[lchild] > a[max]) {
        max = lchild;
      }

      if (rchild < size && a[rchild] > a[max]) {
        max = rchild;
      }

      if (max!= index) {
        swap(a,index,max);
        ajustHeap(a,max,size);
      }
    }
 }

    var i;
    buildHeap(array);

    for (i = size - 1; i > 0;i--) {
      console.log(array);
      swap(array, 0, i);
      ajustHeap(array,0,i);
    }
}

function heapSort2 (a) {

  var  size = a.length;
  var i ;
  buildHeap(a);

  for (i = size - 1; i > 0; i--) {
    swap(a, 0, i);
    ajustHeap(a,0,i);
  }

  // 位置交换
  function swap (a, i, j) {
    var temple = a[i];
    a[i] = a[j];
    a[j] = temple;
  }

  // 建立堆
  function buildHeap(a) {
    var size = a.length;
    for(var t = Math.floor((size -1)/2); t >= 0; t--) {
      ajustHeap(a, t, size);
    }
  }

  // 调整堆
  function ajustHeap(a, index, size) {

    var lchild = index * 2 + 1;
    var rchild = index * 2 + 2;

    var max = index;

    if (index < size/2) {

      if (lchild < size && a[lchild] > a[max]) {
        max = lchild;
      }

      if (rchild < size && a[rchild] > a[max]) {
        max = rchild;
      }

      if (max != index) {
        swap(a, index, max);
        ajustHeap(a,max, size);
      }
    }
  }
}

function heapSort3(a) {

  var size = a.length;
  buildHeap(a);

  for (var i = size - 1 ; i > 0; i-- ) {
    swap(a, 0, i);
    ajustHeap(a, 0, i);
  }

  // 交换位置
  function  swap(a, i, j) {
    var temple = a[i];
    a[i] = a[j];
    a[j] = temple;
  }

  // 建立堆
  function buildHeap(a) {
    var size = a.length;
    for (var i = Math.floor((size - 1)/2);i >= 0;i--) {
      ajustHeap(a, i, size);
    }
  }

  // 调整堆
  function ajustHeap(a, index, size) {

    var lchild = index * 2 + 1;
    var rchild = index * 2 + 2;
    var max = index;

    if (index < size/2) {

      if (lchild < size && a[lchild] > a[max]) {
        max = lchild;
      }

      if (rchild < size && a[rchild] > a[max]) {
        max = rchild;
      }

      if (max != index) {
        swap(a, index, max);
        ajustHeap(a, max, size);
      }
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
result = heapSort3(datas);

console.log("排列结果 :" + datas);