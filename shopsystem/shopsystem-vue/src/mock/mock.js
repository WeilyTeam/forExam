// mock.js
// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
const produceImageData = () => {
  let imageList = [];

  for (let i = 0; i < 5; i++) {
    let testDesc=Random.csentence(5);
    let color=Random.hex();
    let newObject = {
      id: i + 1,
      img: Random.image('400x150', color, '#FFF', 'png', testDesc)
    }
    imageList.push(newObject)
  }
  return imageList;
}
const produceGoodsData = () => {
  let goodsList = [];

  for (let i = 0; i < 20; i++) {
    let color=Random.hex();
    let newObject = {
      title:"商品名称00"+(i+1),
      id: i + 1,
      desc:"这是一段商品描述",
      keyWord:["标签1","标签2"],
      img: Random.image('200x200', color, '#FFF', 'png', i+1),
      num:Random.integer(0, 100),
      price:Random.float(30, 1000, 0,2)
    }
    goodsList.push(newObject)
  }
  return goodsList;
}


Mock.mock('/api/goodsInfo', produceGoodsData)
Mock.mock('/api', produceImageData)
