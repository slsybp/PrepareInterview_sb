//
//  Sort.swift
//  Algorithm_Sort
//
//  Created by ssb on 3/7/18.
//  Copyright © 2018 ssb. All rights reserved.
//

import Cocoa

// 排序算法 从小到大的顺序

/*
冒泡排序
选择排序
插入排序
快速排序
希尔排序
归并排序
堆排序
*/

class Sort: NSObject {
    
    // 模拟数据
    var testNumbers: [Int] = [2,45,33,12,31,89,1,5,80,52]

    // 外部执行
    func execute() -> Void {
    var result: [Int]?

    print("original data: \n \(testNumbers)")

//        result = self.bubbleSort(numbers: self.testNumbers)
//        result = selectSort(numbers: self.testNumbers)
//        result = insertSort(numbers: self.testNumbers)
//    result = quickSort(numbers: self.testNumbers)
//        result = shellSort(numbers: self.testNumbers)
//        result  = mergeSort(numbers: self.testNumbers)
        result = heapSort(numbers: self.testNumbers)
    print("results is :\n \(result!)")
}

// MARK: - 冒泡排序
fileprivate  func bubbleSort(numbers: [Int]) -> [Int] {
    var numbers2 = numbers
    
    for index in 0..<(numbers2.count - 1) {
        var index_j: Int = 0;
        
        while index_j < numbers2.count - index - 1 {
            
            if numbers2[index_j] > numbers2[index_j + 1] {
                let temp = numbers2[index_j]
                numbers2[index_j] = numbers2[index_j + 1]
                numbers2[index_j + 1] = temp
            }
            index_j += 1;
        }
    }
    return numbers2
}

// MARK: - 选择排序
private func selectSort(numbers: [Int]) -> [Int] {
    var numbers2 = numbers
    
    for index in 0..<numbers2.count {
        var index_next = index + 1
        
        while index_next < numbers2.count {
            if numbers2[index] > numbers2[index_next] {
                let temp = numbers2[index]
                numbers2[index] = numbers2[index_next]
                numbers2[index_next] = temp
            }
            index_next += 1;
        }
    }
    return numbers2
}

// MARK: - 插入排序
private func insertSort(numbers: [Int]) -> [Int] {
    var numbers2 = numbers
    
    for index in 1..<numbers2.count{
        let value = numbers2[index]
        var beforeIndex = index - 1
        
        while beforeIndex > -1 && numbers2[beforeIndex] > value{
            numbers2[beforeIndex + 1] = numbers2[beforeIndex]
            beforeIndex -= 1;
        }
        
        beforeIndex += 1;
        numbers2[beforeIndex] = value
    }
    return numbers2;
}

    // MARK: - 快速排序
private func quickSort(numbers: [Int]) -> [Int] {
    var numbers2 = numbers;
    
    // 内部迭代函数
    func subQuickSort(startIndex: Int, endIndex: Int) {
        if startIndex < endIndex {
            let midIndex = division(startIndex: startIndex, endIndex: endIndex)
            subQuickSort(startIndex: startIndex, endIndex: midIndex - 1)
            subQuickSort(startIndex: midIndex + 1, endIndex: endIndex)
        }
    }

    // 切分
    func division(startIndex: Int, endIndex: Int) -> Int {
        if startIndex > endIndex {
            return numbers2.count + 100
        }
        
        var left = startIndex
        var right = endIndex
        let comparedValue = numbers2[startIndex]
        
        while left < right {
            while left < right && numbers2[right] > comparedValue {
                    right -= 1
                }
                numbers2[left] = numbers2[right]
            
            while left < right && numbers2[left] < comparedValue {
                    left += 1
                }
                numbers2[right] = numbers2[left]
            }
        
            numbers2[left] = comparedValue
            return left
    }
    
    subQuickSort(startIndex: 0, endIndex: numbers.count - 1)
    return numbers2;
    
    }
    // MARK: -  希尔排序
    func shellSort(numbers: [Int]) -> [Int] {
        var numbers2 = numbers
        var gap = (Int)(numbers2.count/2)
        
        while gap > 0 {
            print("gap is: \(gap)")
            var index = gap
            while index < numbers2.count {
                print(numbers2)
                let value = numbers2[index]
                var j = index
                
                while j >= gap && numbers2[j - gap] > value {
                    numbers2[j] = numbers2[j - gap]
                    j -= gap
                }
                numbers2[j] = value
                index += 1;
            }
            gap = (Int)(gap/2)
        }
        return numbers2
    }
    
    // MARK: - 归并排序
    func mergeSort(numbers: [Int]) -> [Int] {
        
        // 求较小值
        func min(a: Int, b: Int) -> Int {
            return a < b ? a : b
        }
        
        var unorderedNumbers = numbers
        var b = Array(repeatElement(0, count: unorderedNumbers.count));
        var step = 1
        var k = 0
        while step < unorderedNumbers.count {
            k = 0
            var index = 0
            
            while index < unorderedNumbers.count {
                var start1 = index
                let end1 = min(a: start1 + step, b: unorderedNumbers.count)
                
                var start2 = end1
                let end2 = min(a: start2 + step, b: unorderedNumbers.count)
                
                while start1 < end1 && start2 < end2 {
                    if unorderedNumbers[start1] < unorderedNumbers[start2] {
                        b[k] = unorderedNumbers[start1]
                        start1 += 1
                    } else {
                        b[k] = unorderedNumbers[start2]
                        start2 += 1
                    }
                    k += 1
                }
                
                while start1 < end1 {
                    b[k] = unorderedNumbers[start1]
                    k += 1
                    start1 += 1
                }
                
                while start2 < end2 {
                    b[k] = unorderedNumbers[start2]
                    k += 1
                    start2 += 1
                }
                index = index + step + step
            }
            for i in b.indices {
                unorderedNumbers[i] = b[i]
            }
            step *= 2
        }
    
        return unorderedNumbers;
    }
    
    // MARK: - 堆排序
    func heapSort(numbers: [Int]) -> [Int] {
        var size = numbers.count
        var array = numbers;
        
        // 调整堆
        func adjustHeap(s: Int, length: Int) {
            var index = s
            var j: Int, k: Int, max: Int
            while 2 * index + 1 < length {
                j = 2 * index + 1
                max = j
                if j + 1 < length {
                    if array[j] < array[j+1] {
                        max = j + 1
                    }
                }
                
                if array[index] < array[max] {
                    k = array[index]
                    array[index] = array[max]
                    array[max] = k
                    index = max
                } else {
                    break
                }
            }
        }
        
        var i = size/2
        while i >= 0 {
            adjustHeap(s: i, length: size)
            i -= 1
        }
        
        i = size - 1
        while i > 0 {
            let temple = array[0]
            array[0] = array[i]
            array[i] = temple
            adjustHeap(s: 0, length: i)
            i -= 1
            
        }
        return array
    }

}
