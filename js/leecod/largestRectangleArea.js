function largestRectangleArea(heights) {
  console.time('BF');
  let maxArea = 0;
  const n = heights.length;

  for (let i = 0; i < n; i++) {
    let minHeight = heights[i];

    for (let j = i; j < n; j++) {
      minHeight = Math.min(minHeight, heights[j]);
      const currentArea = minHeight * (j - i + 1);
      maxArea = Math.max(maxArea, currentArea);
    }
  }
  console.timeEnd('BF');
  return maxArea;
}
function largestRectangleAreaStack(heights) {
  console.time('Stack');
  const stack = [];
  let maxArea = 0;
  const n = heights.length;

  for (let i = 0; i <= n; i++) {
    while (stack.length && (i === n || heights[i] < heights[stack[stack.length - 1]])) {
      const height = heights[stack.pop()];
      const width = stack.length ? i - stack[stack.length - 1] - 1 : i;
      maxArea = Math.max(maxArea, height * width);
    }
    stack.push(i);
  }
  console.timeEnd('Stack');
  return maxArea;
}

function largestRectangleAreaDouble(heights) {
  console.time('Double');
  const size = heights.length;
  const minLeftIndex = Array(size).fill(-1);
  const minRightIndex = Array(size).fill(size);

  // 记录每个柱子左边第一个小于该柱子的下标
  for (let i = 1; i < size; i++) {
    let t = i - 1;
    // 向左寻找直到找到一个比当前柱子矮的柱子
    while (t >= 0 && heights[t] >= heights[i]) {
      t = minLeftIndex[t];
    }
    minLeftIndex[i] = t;
  }

  // 记录每个柱子右边第一个小于该柱子的下标
  for (let i = size - 2; i >= 0; i--) {
    let t = i + 1;
    // 向右寻找直到找到一个比当前柱子矮的柱子
    while (t < size && heights[t] >= heights[i]) {
      t = minRightIndex[t];
    }
    minRightIndex[i] = t;
  }

  // 求最大矩形面积
  let result = 0;
  for (let i = 0; i < size; i++) {
    const width = minRightIndex[i] - minLeftIndex[i] - 1;
    const area = heights[i] * width;
    result = Math.max(result, area);
  }
  console.timeEnd('Double');
  return result;
}

// 示例使用

const heights = [
  2, 1, 5, 6, 2, 3, 2, 1, 4, 6, 8, 23, 234, 2, 1, 21, 23, 21, 100, 2, 1, 5, 6, 2, 3, 2, 1,
  4, 6, 8, 23, 234, 2, 1, 21, 23, 21, 1002, 1, 5, 6, 2, 3, 2, 1, 4, 6, 8, 23, 234, 2, 1,
  21, 23, 21, 100,
];
console.log('largestRectangleArea (Double):', largestRectangleAreaDouble(heights)); // 输出: 10

console.log('largestRectangleArea (Stack):', largestRectangleAreaStack(heights));

console.log('largestRectangleArea (BF):', largestRectangleArea(heights));
