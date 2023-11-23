/*
题目209.长度最小的子数组
给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。

示例：
输入：s = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。
*/
// 所谓滑动窗口，「就是不断的调节子序列的起始位置和终止位置，从而得出我们要想的结果」。
// 滑动窗口也可以理解为双指针法的一种！只不过这种解法更像是一个窗口的移动，所以叫做滑动窗口更适合一些。
function solution_03(s: number, arr: number[]) {
  let result = arr.length,
    sublen = 0,
    start = 0,
    sum = 0;
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
    while (sum >= s) {
      sublen = index - start + 1;
      result = result < sublen ? result : sublen;
      sum -= arr[start++];
    }
  }

  return result === arr.length ? 0 : result;
}

console.log(solution_03(4, [2, 3, 1, 2, 4, 3]));
