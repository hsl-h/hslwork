function isCovered(cntS, cntT) {
    for (let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
        if (cntS[i] < cntT[i]) {
            return false;
        }
    }
    for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
        if (cntS[i] < cntT[i]) {
            return false;
        }
    }
    return true;
}

var minWindow = function(s, t) {
    const m = s.length;
    let ansLeft = -1, ansRight = m;
    const cntS = Array(128).fill(0); // s 子串字母的出现次数
    const cntT = Array(128).fill(0); // t 中字母的出现次数
    for (const c of t) {
        cntT[c.codePointAt(0)]++;
    }

    let left = 0;
    for (let right = 0; right < m; right++) { // 移动子串右端点
        cntS[s[right].codePointAt(0)]++; // 右端点字母移入子串
        while (isCovered(cntS, cntT)) { // 涵盖
            if (right - left < ansRight - ansLeft) { // 找到更短的子串
                ansLeft = left; // 记录此时的左右端点
                ansRight = right;
            }
            cntS[s[left].codePointAt(0)]--; // 左端点字母移出子串
            left++;
        }
    }
    return ansLeft < 0 ? "" : s.substring(ansLeft, ansRight + 1);
};
