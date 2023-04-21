class Solution {
  /**
   * 数组占据一块儿连续内存，扩容比较消耗性能
   * 
   * 二维数组 -> 矩阵  
   * 
   * 同向双指针 前后同向子数组
   * 相向双指针 求目标值
   * 
  */
  const Solution();

  /**
   * @address https://leetcode.cn/problems/kLl5u1/
   * 
   * @title: 排序数组中两个数字之和
   *  */
  List<int> twoSum(List<int> numbers, int target) {
    // left指针从0向右，right指针从右向左
    int left = 0, right = numbers.length - 1;

    while (left < right) {
      if (numbers[left] + numbers[right] == target) {
        return [left, right];
      } else if (numbers[left] + numbers[right] < target) {
        left++;
      } else {
        right--;
      }
    }
    return [];
  }

  /**
   * @address https://leetcode.cn/problems/kLl5u1/
   * 
   * @title: 排序数组中两个数字之和
   *  */
  List<List<int>> threeSum(List<int> nums) {
    nums.sort((a, b) => a - b);
    int i = 0;
    List<List<int>> result = [];
    while (i < nums.length - 2) {
      final target = nums[i];
      int left = i + 1, right = nums.length - 1;
      while(left < right) {
        final leftVal = nums[left];
        if (leftVal + nums[right] == -target) {
          result.add([target, leftVal, nums[right]]);
          left++;
          while (nums[left] == leftVal && left < right) {
            left++;
          }
        } else if (nums[left] + nums[right] < -target) {
          left++;
        } else {
          right--;
        }
      }
      while(target == nums[i] && i < nums.length - 2) {
        i++;
      }
    }
    return result;
  }
}

void main(List<String> args) {
  Solution s = const Solution();
  print(s.twoSum([1, 2, 4, 6, 10], 8)); // [1, 3];

  print(s.threeSum([0, 1, -1, -1])); // [1, 3];
}
