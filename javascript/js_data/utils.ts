
export function swap(arr: number[], i: number, j: number) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  // [arr[i], arr[j]] = [arr[j], arr[i]]
}
