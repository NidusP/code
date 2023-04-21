/**
 * 栈是一种遵从后进先出（LIFO）原则的有序集合。
 *
 * 用在编程语言的编译器和内存中保存变量、方法调用等，也被用于浏览器历史记录（浏览器的返回按钮）。
 *
 *
 *
 * 栈的实际应用非常广泛。在回溯问题中，它可以存储访问过的任务或路径、撤销的操作。
 * Java和C#用栈来存储变量和方法调用，特别是处理递归算法时，有可能抛出一个栈溢出异常
 * */

class Stack {
  // 类中增加私有属性的提案, 属性前添加井号（#）作为前缀来声明私有属性

  // 或使用 weakMap + array 实现 私有属性不被外部访问（就是外部无法读取当前栈本身，只可以通过方法调用）
  private _items: any[];
  constructor() {
    // Symbol('item') 作为key
    this._items = []; // {1}
  }

  public push(...i: any[]) {
    this._items.push(i);
  }

  public pop() {
    return this._items.pop();
  }

  public peek() {
    return this._items[this.size() - 1];
  }

  public isEmpty() {
    return this.size() === 0;
  }

  public clear() {
    this._items = [];
  }

  public size() {
    return this._items.length;
  }
}

/**
 * ten to two
 */
function decimalToBinary(decNumber: number) {
  const remStack = new Stack();
  let number = Math.abs(decNumber);
  let rem;
  let binaryString = decNumber < 0 ? "-" : "";

  while (number > 0) {
    // {1}
    rem = Math.floor(number % 2); // {2}
    remStack.push(rem); // {3}
    number = Math.floor(number / 2); // {4}
  }

  while (!remStack.isEmpty()) {
    // {5}
    binaryString += remStack.pop().toString();
  }
  return binaryString;
}

console.log(decimalToBinary(-8), parseInt('-1000', 2));
