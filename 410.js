var splitArray = function(nums, k) {
    function check(mx) {
        let cnt = 1, s = 0;
        for (const x of nums) {
            if (s + x <= mx) {
                s += x;
                continue;
            }
            if (cnt === k) { // 不能继续划分
                return false;
            }
            cnt++; // 新划分一段
            s = x;
        }
        return true;
    }

    let left = Math.max(...nums) - 1;
    let right = _.sum(nums);
    while (left + 1 < right) {
        const mid = Math.floor((left + right) / 2);
        if (check(mid)) {
            right = mid;
        } else {
            left = mid;
        }
    }
    return right;
};
