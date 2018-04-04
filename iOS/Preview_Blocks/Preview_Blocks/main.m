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
    
    int (^blk)(void) = ^{printf("Block \n");
        return 2;
    };
    blk();
    return 0;
}
