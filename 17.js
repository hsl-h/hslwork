const MAPPING = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

var letterCombinations = function(digits) {
    const n = digits.length;
    if (n === 0) {
        return [];
    }
    const path = Array(n); // 注意 path 长度一开始就是 n，不是空数组
    const ans = [];
    function dfs(i) {
        if (i === n) {
            ans.push(path.join(""));
            return;
        }
        const letters = MAPPING[Number(digits[i])];
        for (const c of letters) {
            path[i] = c; // 直接覆盖
            dfs(i + 1);
        }
    }
    dfs(0);
    return ans;
};
