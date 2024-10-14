class NodeStore {
    /**
    * @param {Node} node
    * @param {any} value
    */
    constructor() {
        this.map = [];
      }
      set(node, value) {
        const found = this.map.find(item => node === item[0]);
        if (found) {
            found[1] = value; // 更新值
        } else {
            this.map.push([node, value]); // 新增条目
        }
    }
   /**
    * @param {Node} node
    * @return {any}
    */
   get(node) {
    // 返回数组中第一个满足提供测试函数的元素
    const found = this.map.find((item,index,array)=>{
        return node === item[0]
    })
    return found ? found[1] : undefined; 
   }
   
   /**
    * @param {Node} node
    * @return {Boolean}
    */
   has(node) {
    // 数组中的至少一个元素是否满足提供的测试函数。
    return this.map.some(item => node === item[0]); 
   }
 }

// #########
/*
性能优化：通过使用对象字典（this.nodes）来存储值，可以在 set、get 和 has 方法中实现更快的查找，因为对象的属性访问通常比数组的遍历更高效。

避免重复条目：使用 Symbol 作为唯一键，确保每个节点都有唯一的存储标识，从而避免不同节点之间的冲突。这也让你能够在不担心命名冲突的情况下为节点存储数据。

简洁的代码：相较于使用数组存储键值对，这种实现方式使得代码更加简洁易读，维护起来更方便。

内存管理：只存储当前需要的节点和对应的值，不会因旧数据而影响性能。
*/
 class NodeStore2 {
    /**
    * @param {Node} node
    * @param {any} value
    */
   constructor() {
     this.nodes = {};
   }
   set(node, value) {
      node.__nodeStoreKey__ = Symbol();
     this.nodes[node.__nodeStoreKey__] = value;
   }
   /**
    * @param {Node} node
    * @return {any}
    */
   get(node) {
    return this.nodes[node.__nodeStoreKey__];
   }
   
   /**
    * @param {Node} node
    * @return {Boolean}
    */
   has(node) {
     return !!this.nodes[node.__nodeStoreKey__];
   }
 }