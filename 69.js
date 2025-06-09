var mySqrt = function(x) {
    // 开区间 (left, right)
    let left = 0, right = Math.min(x + 1, 46341);
    while (left + 1 < right) {  // 开区间不为空
        // 循环不变量：left^2 <= x
        // 循环不变量：right^2 > x
        let m = Math.floor((left + right) / 2);
        if (m * m <= x) {
            left = m;
        } else {
            right = m;
        }
    }
    // 循环结束时 left+1 == right
    // 此时 left^2 <= x 且 right^2 > x
    // 所以 left 最大的满足 m^2 <= x 的数
    return left;
};
