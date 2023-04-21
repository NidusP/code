<!-- 重学前端js -->

基础部分

- js
- css
- html
- 浏览器实现原理和 API

用规定的文法，去表达特定语义，最终操作运行时的

- 文法
  - 词法
  - 语法
- 语义
- 运行时
  - 类型（数据结构）（7 种基本类型与 7 种语言类型）
  - 执行过程（算法）

```js
### 类型
// 其中基本类型 Undefined；Null；Boolean；String；Number；Symbol；Object。

// Undefined 不是关键词，仅仅是一个变量；
// Null 是关键词，在任何代码块都可以放心使用
{
  let undefined = 3
  // 使用void来获取undefined， 而不是通过undefined变量本身
  console.log(undefined, void 0)
  // let null = 3  caught SyntaxError: Unexpected token 'null'
  // console.log(null)
}





// Symbol 是 ES6 中引入的新类型，它是一切非字符串的对象 key 的集合
// Symbol 可以具有字符串类型的描述，但是即使描述相同，Symbol 也不相等。

// 使用 Symbol.iterator 来自定义 for…of 在对象上的行为
var o = new Object；
o[Symbol.iterator] = function() {
  var v = 0
  return {
    next: function() {
      return { value: v++, done: v > 10 }            
    }        
  }            
};
for(var v of o) console.log(v); // 0 1 2 3 ... 9


3 与 new Number(3) 是完全不同的值，它们一个是 Number 类型， 一个是对象类型。Number、String 和 Boolean，三个构造器是两用的，当跟 new 搭配时，它们产生对象，当直接调用时，它们表示强制类型转换。Symbol 函数比较特殊，直接用 new 调用它会抛出错误，但它仍然是 Symbol 对象的构造器。
```
### 对象


HTML：文档标记语音。 包括标签、实体、命名空间

标签分类：

1. 文档元信息：通常是出现在 head 标签中的元素，包含了描述文档自身的一些信息；
2. 语义相关：扩展了纯文本，表达文章结构、不同语言要素的标签；
3. 链接：提供到文档内和文档外的链接；
4. 替换型标签：引入声音、图片、视频等外部元素替换自身的一类标签；
5. 表单：用于填写和提交信息的一类标签；
6. 表格：表头、表尾、单元格等表格的结构。

[微前端](https://microfrontends.cn/#%E7%A4%BA%E4%BE%8B)
