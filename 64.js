/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    let fn = Array.from({ length: m }, () => Array(n).fill(0));

    fn[0][0] = grid[0][0]
    for (let i = 1; i < m; i++) {
        fn[i][0] = grid[i][0] + fn[i - 1][0]
    }

    for (let i = 1; i < n; i++) {
        fn[0][i] = grid[0][i] + fn[0][i - 1]
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            fn[i][j] = Math.min(fn[i - 1][j], fn[i][j - 1]) + grid[i][j]
        }
    }
    return fn[m - 1][n - 1]
};