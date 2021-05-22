// mock.js
// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
const produceSongData = () => {
  let dataList = [];

  for (let i = 0; i < 5; i++) {

    let newObject = {
      id: i + 1,
      swiperImg:[
          Random.image('200x100', '#4A7BF7', 'about'),
          Random.image('200x100', '#4A7BF7', 'this'),
          Random.image('200x100', '#4A7BF7', 'song')
      ],
      logoImg:Random.image('70x70', '#4A7BF7', 'logo'),
      song:Mock.mock('@title'),
      singer:Random.cname(),
      link:"https://mp32.9ku.com/upload/128/2018/02/09/875689.mp3"
    }
    dataList.push(newObject)
  }
  return  dataList;
}
Mock.setup({
  timeout: 0
})

Mock.mock('/api', produceSongData)
