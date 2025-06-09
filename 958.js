/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function (root) {
    const arr = [root]
    let flag = false
    while (arr.length) {
        const node = arr.pop();
        if (node === null) {
            flag = true
        } else {
            if(flag) return false       
            arr.unshift(node.left)
            arr.unshift(node.right)
        }
    }
    return true
};