'use strict';

export const getInfo = data => {
    const {arr0, arr1 = [], arr2 = []} = data;
    const allArrs = [...arr0, ...arr1, ...arr2];
    return {
        length: allArrs.length,
        max: Math.max(...allArrs),
        min: Math.min(...allArrs)
    }


};
