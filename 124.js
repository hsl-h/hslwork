var maxPathSum = function(root) {
    let ans = -Infinity;
    function dfs(node) {
        if (node === null) {
            return 0; // 没有节点，和为 0
        }
        const lVal = dfs(node.left); // 左子树最大链和
        const rVal = dfs(node.right); // 右子树最大链和
        ans = Math.max(ans, lVal + rVal + node.val); // 两条链拼成路径
        return Math.max(Math.max(lVal, rVal) + node.val, 0); // 当前子树最大链和（注意这里和 0 取最大值了）
    }
    dfs(root);
    return ans;
};
