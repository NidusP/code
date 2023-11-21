/**
 * 
编号35：搜索插入位置
给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

你可以假设数组中无重复元素。

示例 1:
输入: [1,3,5,6], 5
输出: 2

示例 2:
输入: [1,3,5,6], 2
输出: 1

示例 3:
输入: [1,3,5,6], 7
输出: 4

示例 4:
输入: [1,3,5,6], 0
输出: 0
 * 
*/

// 有序数组，可用二分法查找
function solution(arr: number[], target: number) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    const midVal = arr[mid];
    if (midVal === target) return mid;
    if (midVal > target) {
      right--;
    } else {
      left++;
    }
  }
  return right + 1;
}

// 临界值不同
function solution_a(arr: number[], target: number) {
  let left = 0,
    right = arr.length;
  while (left < right) {
    const mid = left + ((right - left) >> 1);
    const midVal = arr[mid];
    if (midVal === target) return mid;
    if (midVal > target) {
      right--;
    } else {
      left++;
    }
  }
  return right;
}

function test() {
  const test = [
    {
      arr: [1, 3, 5, 6],
      target: 5,
    },
    {
      arr: [1, 3, 5, 6],
      target: 2,
    },
    {
      arr: [1, 3, 5, 6],
      target: 7,
    },
    {
      arr: [1, 3, 5, 6],
      target: 0,
    },
    {
      arr: [-5, 1, 3, 5, 6, 8, 12],
      target: 5,
    },
    {
      arr: [-5, 1, 3, 5, 6, 8, 12],
      target: 2,
    },
    {
      arr: [-5, 1, 3, 5, 6, 8, 12],
      target: 7,
    },
    {
      arr: [-5, 1, 3, 5, 6, 8, 12],
      target: 0,
    },
  ];
  test.forEach((item) => {
    console.log(
      solution(item.arr, item.target),
      solution_a(item.arr, item.target)
    );
  });
}

test();
