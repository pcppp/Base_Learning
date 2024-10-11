/*
 * @Descripttion:
 * @version:
 * @Author: pc
 * @Date: 2024-10-10 13:25:50
 * @LastEditors: your name
 * @LastEditTime: 2024-10-10 14:05:18
 */
/* you can use this Class which is bundled together with your code

class Stack {
  push(element) { // add element to stack }
  peek() { // get the top element }
  pop() { // remove the top element}
  size() { // count of element }
}
*/

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  enqueue(element) {
    // add new element to the rare
    if(this.stack1.size()){
      this.stack2.push(element)
      while(this.stack1.size()){
        this.stack2.push(this.stack1.pop())
      }
    }else{
      this.stack1.push(element)
      while(this.stack2.size()){
        this.stack1.push(this.stack2.pop())
      }
      
    }

  }
  peek() {
    return this.stack1.size()?this.stack1.peek():this.stack2.peek();
  }
  size() {
    // return count of element
    return this.stack1.size()?this.stack1.size():this.stack2.size();
  }
  dequeue() {
    // remove the head element
    return this.stack1.size()?this.stack1.pop():this.stack2.pop();

  }
}
