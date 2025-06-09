var generateParenthesis = function(n) {
    const m = n * 2;
    const ans = [];
    const path = Array(m);

    // 目前填了 i 个括号
    // 这 i 个括号中有 open 个左括号，i-open 个右括号
    function dfs(i, open) {
        if (i === n * 2) {
            ans.push(path.join(""));
            return;
        }
        if (open < n) { // 可以填左括号
            path[i] = '(';
            dfs(i + 1, open + 1);
        }
        if (i - open < open) { // 可以填右括号
            path[i] = ')';
            dfs(i + 1, open);
        }
    }

    dfs(0, 0);
    return ans;
};
