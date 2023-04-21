interface IQueue {
  count: number;
  lowestCount: number;
  items: Record<number, any>;

  isEmpty: () => boolean;
  size: () => number;
  clear: () => void;
}

abstract class BaseQueue implements IQueue {
  count: number;
  lowestCount: number;
  items: Record<number, any>;

  constructor() {
    this.count = 0; // {1}
    this.lowestCount = 0; // {2}
    this.items = {}; // {3}
  }

  public isEmpty() {
    return this.size() === 0;
  }

  public size() {
    return this.count - this.lowestCount;
  }

  public clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
}

/**
 * 队列是遵循先进先出（FIFO，也称为先来先服务）原则的一组有序的项。
 * 队列在尾部添加新元素，并从顶部移除元素。最新添加的元素必须排在队列的末尾。
 *
 */
class Queue extends BaseQueue {
  constructor() {
    super();
  }
  enqueue(element: any) {
    this.items[this.count] = element;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount]; // {1}
    delete this.items[this.lowestCount]; // {2}
    this.lowestCount++; // {3}
    return result; // {4}
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }
    return objString;
  }
}

/**
 * 双端队列允许在两端添加和移除元素
 */
class Deque extends BaseQueue {
  constructor() {
    super();
  }

  addBack(element: any) {
    this.items[this.count] = element;
    this.count++;
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.count]; // {1}
    delete this.items[this.count]; // {2}
    this.count--; // {3}
    return result; // {4}
  }

  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count];
  }

  addFront(element: any) {
    if (this.isEmpty()) {
      // {1}
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      // {2}
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        // {3}
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[0] = element; // {4}
    }
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount]; // {1}
    delete this.items[this.lowestCount]; // {2}
    this.lowestCount++; // {3}
    return result; // {4}
  }

  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }
}

/**
 * 击鼓传花
 * */
function hotPotato(elementsList: string | any[], num: number) {
  const queue = new Queue(); // {1}
  const elimitatedList = [];

  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i]); // {2}
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue()); // {3}
    }
    elimitatedList.push(queue.dequeue()); // {4}
  }

  return {
    eliminated: elimitatedList,
    winner: queue.dequeue(), // {5}
  };
}

const names = ["John", "Jack", "Camila", "Ingrid", "Carl"];
const result = hotPotato(names, 7);
result.eliminated.forEach((name) => {
  console.log(`${name}在击鼓传花游戏中被淘汰。`);
});

console.log(`胜利者： ${result.winner}`);

/**
 * 回文
 * */
function palindromeChecker(aString: string) {
  if (aString.length === 0) {
    // {1}
    return false;
  }
  const deque = new Deque(); // {2}
  const lowerString = aString.toLocaleLowerCase().split(" ").join(""); // {3}
  let isEqual = true;
  let firstChar, lastChar;

  for (let i = 0; i < lowerString.length; i++) {
    // {4}
    deque.addBack(lowerString.charAt(i));
  }

  while (deque.size() > 1 && isEqual) {
    // {5}
    firstChar = deque.removeFront(); // {6}
    lastChar = deque.removeBack(); // {7}
    if (firstChar! == lastChar) {
      isEqual = false; // {8}
    }
  }

  return isEqual;
}

console.log("a", palindromeChecker("a"));
console.log("aa", palindromeChecker("aa"));
console.log("kayak", palindromeChecker("kayak"));
console.log("level", palindromeChecker("level"));
console.log(
  "Was it a car or a cat I saw",
  palindromeChecker("Was it a car or a cat I saw")
);
console.log("Step on no pets", palindromeChecker("Step on no pets"));


// 当我们在浏览器中打开新标签时，就会创建一个任务队列。
// 这是因为每个标签都是单线程处理所有的任务，称为事件循环。
// 浏览器要负责多个任务，如渲染HTML、执行JavaScript代码、处理用户交互（用户输入、鼠标点击等）、执行和处理异步请求