var findLength = function(nums1, nums2) {
    const n = nums1.length, m = nums2.length;
    const f = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
    let ans = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (nums1[i] === nums2[j]) {
                f[i + 1][j + 1] = f[i][j] + 1;
                ans = Math.max(ans, f[i + 1][j + 1]);
            }
        }
    }
    return ans;
};
