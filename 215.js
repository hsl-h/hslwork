class MinHeap {
    constructor() {
        this.heap = [];
    }

    buildHeap(arr) {
        // 从上至下构建
        this.heap = [];
        for(let i = 0; i < arr.length; i++){
            this.insert(arr[i])
        }

        // 从下至上构建
        // this.heap = [...arr];
        // let lastNonLeafIndex = Math.floor((this.heap.length - 2) / 2); // 之前提到的性质
        // for (let i = lastNonLeafIndex; i >= 0; i--) { 
        //     this.#siftDown(i);
        // }
    }

    #siftDown(index) {
        let leftIndex = index * 2 + 1;  // 左子节点索引
        let rightIndex = index * 2 + 2; // 右子节点索引
        let swapIndex = index; // 需要交换的索引，初始为当前节点

        // 如果左子节点存在且比当前节点小，则更新swapIndex
        if (leftIndex < this.heap.length && this.heap[leftIndex] < this.heap[swapIndex]) {
            swapIndex = leftIndex;
        }

        // 如果右子节点存在且比当前最小的子节点还小，则更新swapIndex
        if (rightIndex < this.heap.length && this.heap[rightIndex] < this.heap[swapIndex]) {
            swapIndex = rightIndex;
        }

        // 如果需要交换，执行交换并递归下沉
        if (swapIndex !== index) {
            this.#swap(swapIndex, index);
            this.#siftDown(swapIndex);
        }
    }

    #siftUp(index) {
        let parentIndex = Math.floor((index - 1) / 2); // 父节点索引
        let swapIndex = index; // 需要交换的索引，初始为当前节点

        // 如果父节点存在且比当前节点大，则更新swapIndex
        if (parentIndex >= 0 && this.heap[parentIndex] > this.heap[index]) {
            swapIndex = parentIndex;
        }

        // 如果需要交换，执行交换并递归上浮
        if (swapIndex !== index) {
            this.#swap(swapIndex, index);
            this.#siftUp(swapIndex);
        }
    }

    #swap(i, j) {
        let tmp = this.heap[j];
        this.heap[j] = this.heap[i];
        this.heap[i] = tmp;
    }

    pop() {
        if (this.heap.length === 0) return null;  // 边界情况检查
        let val = this.heap[0];
        let n = this.heap.length;

        // 将根节点与最后一个元素交换并移除最后一个元素，然后下沉
        this.#swap(0, n - 1);
        this.heap.length = n - 1;  // 直接修改长度，避免使用slice

        this.#siftDown(0);
        return val;
    }

    insert(val) {
        this.heap.push(val);
        this.#siftUp(this.heap.length - 1);
    }
};

var findKthLargest = function(nums, k) {
    let h = new MinHeap();
    h.buildHeap(nums);

    // 弹出 `nums.length - k` 个元素以得到第k大的元素
    for (let i = 0; i < nums.length - k; i++) {
        h.pop();  // 移除最小的元素
    }

    return h.pop();  // 堆顶现在是第k大的元素
};
