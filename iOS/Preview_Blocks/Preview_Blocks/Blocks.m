//
//  Blocks.m
//  Preview_Blocks
//
//  Created by ssb on 3/4/18.
//  Copyright © 2018 ssb. All rights reserved.
//

#import "Blocks.h"

@implementation Blocks

- (void)baseBlocks {
  int (^blk)(int) = ^int (int count) {
        return count + 1;
    };
    

    int (^blk2)(int) = blk;
}
@end
