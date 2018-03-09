//
//  main.m
//  Preview_Blocks
//
//  Created by ssb on 3/4/18.
//  Copyright © 2018 ssb. All rights reserved.
//

#import <Foundation/Foundation.h>

int main(int argc, const char * argv[]) {
//    @autoreleasepool {
//        // insert code here...
////        NSLog(@"Hello, World!");
//    }
//    return 0;
    
    void (^blk)(void) = ^{printf("Block \n");};
    blk();
    return 0;
}
