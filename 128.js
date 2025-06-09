var longestConsecutive = function(nums) {
    let ans = 0;
    const st = new Set(nums); // 把 nums 转成哈希集合
    for (const x of st) { // 遍历哈希集合
        if (st.has(x - 1)) {
            continue;
        }
        // x 是序列的起点
        let y = x + 1;
        while (st.has(y)) { // 不断查找下一个数是否在哈希集合中
            y++;
        }
        // 循环结束后，y-1 是最后一个在哈希集合中的数
        ans = Math.max(ans, y - x); // 从 x 到 y-1 一共 y-x 个数
    }
    return ans;
};