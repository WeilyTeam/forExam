// mock.js
// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
const getPersonTodo = () => {
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
const getImg = (val) => {
  let imgList = [];
  for (let i = 0; i < 5; i++) {
    imgList.push(Random.image('200x100', '#4A7BF7', 'Todo'))
  }

  return imgList
}
Mock.mock('/api', getPersonTodo)
Mock.mock('/api/img', getImg)
