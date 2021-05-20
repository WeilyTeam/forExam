// mock.js
// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
const produceNewsData = () => {
  let todoList = [];
  for (let i = 0; i < 100; i++) {
    let todoObject = {
      id: i + 1,
      name: Random.cname(),
      tel: Random.natural(10000),
      task: Random.csentence(3, 5),
      isFinish: Random.boolean(),
    }
    todoList.push(todoObject)
  }
  return todoList;
}
Mock.mock('/api', produceNewsData)
