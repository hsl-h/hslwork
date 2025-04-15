// 定义节点类
function Node(val, neighbors) {
    this.val = (val === undefined? 0 : val);
    this.neighbors = (neighbors === undefined? [] : neighbors);
}

function cloneGraph(node) {
    if (!node) {
        return null;
    }
    // 用于存储已克隆的节点，键是原节点，值是克隆节点
    let visited = new Map();
    // 创建起始节点的克隆节点
    let cloneStart = new Node(node.val);
    visited.set(node, cloneStart);
    let queue = [node];
    while (queue.length > 0) {
        let current = queue.shift();
        for (let neighbor of current.neighbors) {
            if (!visited.has(neighbor)) {
                // 克隆邻居节点
                let cloneNeighbor = new Node(neighbor.val);
                visited.set(neighbor, cloneNeighbor);
                queue.push(neighbor);
            }
            // 将克隆的邻居节点添加到当前克隆节点的邻居列表中
            visited.get(current).neighbors.push(visited.get(neighbor));
        }
    }
    return cloneStart;
}