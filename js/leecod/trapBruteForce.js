function trapBruteForce(height) {
  // 开始计时
  console.time('Execution BruteForce Time');
  const n = height.length;
  if (n === 0) return 0;

  let totalWater = 0;

  for (let i = 1; i < n - 1; i++) {
    let leftMax = 0,
      rightMax = 0;

    for (let j = 0; j <= i; j++) {
      leftMax = Math.max(leftMax, height[j]);
    }

    for (let j = i; j < n; j++) {
      rightMax = Math.max(rightMax, height[j]);
    }

    totalWater += Math.min(leftMax, rightMax) - height[i];
  }
  console.timeEnd('Execution BruteForce Time');
  return totalWater;
}

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
function trapDynamicProgramming(height) {
  console.time('Execution DynamicProgramming Time');
  const n = height.length;
  if (n === 0) return 0;

  const leftMax = Array(n).fill(0);
  const rightMax = Array(n).fill(0);
  let totalWater = 0;

  leftMax[0] = height[0];
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }

  rightMax[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }

  for (let i = 0; i < n; i++) {
    const waterLevel = Math.min(leftMax[i], rightMax[i]);
    totalWater += waterLevel - height[i];
  }
  console.timeEnd('Execution DynamicProgramming Time');
  return totalWater;
}
function trap(height) {
  console.time('Execution Time');
  if (height.length === 0) return 0;

  let left = 0,
    right = height.length - 1;
  let left_max = 0,
    right_max = 0;
  let total_water = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= left_max) {
        left_max = height[left];
      } else {
        total_water += left_max - height[left];
      }
      left++;
    } else {
      if (height[right] >= right_max) {
        right_max = height[right];
      } else {
        total_water += right_max - height[right];
      }
      right--;
    }
  }
  console.timeEnd('Execution Time');
  return total_water;
}
console.log('Total trapped water (Force):', trapBruteForce(height));
console.log('Total trapped water (Dynamic Programming):', trapDynamicProgramming(height));
console.log('Total trapped water:', trap(height));
