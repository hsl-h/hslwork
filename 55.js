var canJump = function(nums) {
    let mx = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > mx) { // 无法到达 i
            return false;
        }
        mx = Math.max(mx, i + nums[i]); // 从 i 最右可以跳到 i + nums[i]
    }
    return true;
};
