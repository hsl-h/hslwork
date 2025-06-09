/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const m = word1.length;
    const n = word2.length;

    // 初始化一个 (m+1) x (n+1) 的二维数组，默认值为0
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // 初始化第一列：将 word1 前 i 个字符删除
    for (let i = 0; i <= m; i++) {
        dp[i][0] = i;
    }

    // 初始化第一行：将 word2 的前 j 个字符插入
    for (let j = 0; j <= n; j++) {
        dp[0][j] = j;
    }

    // 填表格，从 dp[1][1] 开始
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // 默认取三种操作中的最小值 + 1
            dp[i][j] = Math.min(
                dp[i - 1][j - 1], // 替换
                dp[i - 1][j],     // 删除
                dp[i][j - 1]      // 插入
            ) + 1;

            // 如果当前字符相等，就可以直接继承，不操作
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = Math.min(dp[i][j], dp[i - 1][j - 1]);
            }
        }
    }

    // 返回将 word1 转为 word2 的最小操作数
    return dp[m][n];
};