/**
 第203题：移除链表元素
  题意：删除链表中等于给定值 val 的所有节点。
  1 -> 4 -> 2 -> 4
  1 -> 2 
 * 
*/
class ListNode {
  value: number | null;
  next: ListNode | null;
  constructor(val: number | null = null, next: ListNode | null = null) {
    this.value = val;
    this.next = next;
  }
}
function solution(list: ListNode, val: number) {
  const head = new ListNode();
  head.next = list;
  let curr = head;
  while (curr?.next) {
    if (curr.next.value === val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return head.next;
}

const list = new ListNode(
  1,
  new ListNode(4, new ListNode(2, new ListNode(4, null)))
);
console.log(list);

console.log(solution(list, 4));
