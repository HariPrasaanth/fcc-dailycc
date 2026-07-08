// Given an array of daily stock prices and a budget (in dollars), calculate the maximum profit you could make by buying and selling the stock over the given period.
// You may only sell after you buy.
// You can only buy whole shares.
// Return the maximum possible profit as a string, rounded down to the nearest cent and formatted to two decimal places.

function getMaxProfit(prices, budget) {
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    let buyingPrice = prices[i];
    let stcQuantity = Math.trunc(budget / buyingPrice);
    for (let j = i + 1; j < prices.length; j++) {
      let sellingPrice = prices[j];
      if (sellingPrice > buyingPrice) {
        let profit = stcQuantity * (sellingPrice - buyingPrice);
        if (profit > maxProfit) {
          maxProfit = profit;
        }
      }
    }
  }
  return maxProfit.toFixed(2);
}

// Test cases
console.log(getMaxProfit([5, 6], 50)); // "10.00"
console.log(getMaxProfit([8, 2, 5, 10], 20)); // "80.00"
console.log(getMaxProfit([4, 5, 3, 6], 20)); // "18.00"
console.log(getMaxProfit([54.4, 51.22, 53.99, 50.28, 53.01, 52.84], 200)); // "8.31"
console.log(getMaxProfit([15.38, 15.01, 14.99, 14.62, 14.28], 80)); // "0.00"
console.log(
  getMaxProfit(
    [121.45, 126.82, 122.91, 124.65, 128.83, 128.83, 127.33],
    1230.25,
  ),
); // "73.80"
