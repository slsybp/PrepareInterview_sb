//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"


// 插入排序
func insertSort(a: [Int]) ->Void {
    
    var newArray = [Int]();
    print(a)
    
    for index in 0..<a.count {
        print("index is: \(index)")
        newArray[index] = a[index]
    }
}

insertSort(a:[2,3,5])



