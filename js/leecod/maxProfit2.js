const maxProfit = (prices) => {
  let current = null;
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (current === null) {
      current = prices[i];
      console.log('设置current', current);
      continue;
    }
    if (current < prices[i]) {
      if (prices[i + 1] && prices[i + 1] > prices[i]) {
        continue;
      } else {
        console.log('买出');
        console.log('current', current);
        console.log('price', prices[i]);
        profit += prices[i] - current;
        current = null;
      }
    } else {
      current = prices[i];
    }
  }
  return profit;
};
maxProfit([2, 1, 2, 0, 1]);
