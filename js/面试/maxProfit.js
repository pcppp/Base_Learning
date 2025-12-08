const maxProfit = (prices) => {
  const max = 0;
  const min = prices[0] + 1;
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(prices[i], min);
    max = Math.max(prices[i] - min, max);
  }
  return max;
};
arr = [10, 2, 5, 7, 4];
console.log(best(arr));
