/**
 * 股票的价格序列用数组表示：【6， 4， 8， 2， 8， 9， 10, 7, 3】
 * 数组的第 i 个元素代表第 i + 1天股票第价格
 * 求最大收益是多少。
 * eg：第四天买入（2），第七天卖出（10），收益最大为 8
 * MaxGain[i] = Math.max(MaxGain[i - 1], arr[i] - min(0 到 i - 1))
 */

// const prices = [6, 4, 8, 2, 4, 8, 10, 7, 3]

// const DPMaxGain = (arr) => {
//   let maxGain = 0
//   let min = arr[0]
//   let len = arr.length
//   for(let i = 1; i < len; i++) {
    
//   }
// }

 
 