/*尝试实现一个简单的事件发射器，它应具备以下行为：
请实现一个 EventEmitter 类，使其具备以下四个核心方法：

1. on(eventName, handler) (订阅)
功能： 注册一个事件监听器。当 eventName 事件被触发时，handler 函数应该被调用。
特性： 同一个事件名可以注册多个监听器。监听器应该被重复执行。

2. off(eventName, handler) (取消订阅)
功能： 移除一个指定的事件监听器。
特性： 只有当 eventName 和 handler 同时匹配时，监听器才会被移除。如果注册了多个相同的 handler，只移除第一个匹配的。

3. once(eventName, handler) (单次订阅)
功能： 注册一个事件监听器。该监听器在事件第一次被触发后，执行一次，然后立即被移除。
实现要求： once 方法应基于已有的 on 和 off 方法实现。

4. emit(eventName, ...args) (发布/触发)
功能： 触发指定名称的事件。
特性：
按照注册的顺序调用所有与 eventName 匹配的监听器（包括 on 和未执行的 once 监听器）。
将 emit 方法接收到的所有参数（...args）传递给监听器函数。
*/
class EventEmitter {
  on(eventName, handler) {}
  off(eventName, handler) {}
  once(eventName, handler) {}
  emit(eventName, ...args) {}
}
