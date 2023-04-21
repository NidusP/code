import { swap } from "./utils";

/**
 *  冒泡排序比较所有相邻的两个项，如果第一个比第二个大，则交换它们。元素项向上移动至正确的顺序，就好像气泡升至表面一样，冒泡排序因此得名。
 * */
function bubbleSort(array: number[]) {
  const len = array.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
}

const arr = [-2, 90, 23, 324, 436, 2134, -324, 3254, -12, 324];
selectionSort(arr)
console.log(arr)

/**
 * 选择排序算法是一种原址比较排序算法。
 * 选择排序大致的思路是找到数据结构中的最小值并将其放置在第一位，接着找到第二小的值并将其放在第二位，以此类推。
 * 
*/
function selectionSort(array: number[]) {
  const { length } = array; 
  let indexMin;
  for (let i = 0; i < length -1; i++) { 
    indexMin = i; 
    for (let j = i + 1; j < length; j++) { 
      if (array[j] < array[indexMin]) { 
       
        indexMin = j; 
      }
    }
    if (i ! == indexMin) { 
      swap(array, i, indexMin);
    }
    console.log(i, indexMin, array)
  }
};












